import { CreateTransactionDTO, GetDashboardDTO, indexTransactionsDTO } from "../../dtos/transactions.dto"
import { Balance } from "../../entities/balance.entity"
import { Transaction } from "../../entities/transactions.entity"
import { TrasactionsModel } from "../schemas/transactions.schema"

export class TransactionsRepository {

    constructor(private model: typeof TrasactionsModel) { }

    async create({ title, date, amount, type, category }: Transaction): Promise<Transaction> {
        const createdTrasactions = await this.model.create({ title, date, amount, type, category })

        return createdTrasactions.toObject<Transaction>()
    }


    async index({ beginDate, categoryId, endDate, title }: indexTransactionsDTO): Promise<Transaction[]> {

        const whereParams: Record<string, unknown> = {
            ...(title && { title: { $regex: title, $options: 'i' } }),
            ...(categoryId && { 'category._id': categoryId }),
        }

        if (beginDate || endDate) {
            whereParams.date = {
                ...(beginDate && { $gte: beginDate }),
                ...(endDate && { $lte: endDate })
            }
        }

        const transactions = await this.model.find(whereParams, undefined, {
            sort: {
                date: -1
            }
        });
        const transactionsMap = transactions.map((item) => item.toObject<Transaction>())

        return transactionsMap
    }

    async getBalance({ beginDate, endDate }: GetDashboardDTO): Promise<Balance> {

        const aggregate = this.model.aggregate<Balance>()

        if (beginDate || endDate) {
            aggregate.match({
                date: {
                    ...(beginDate && { $gte: beginDate }),
                    ...(endDate && { $lte: endDate })
                }
            })
        }

        const [result] = await aggregate
            .project({
                _id: 0,
                income: {
                    $cond: [
                        {
                            $eq: ["$type", "income"]
                        },
                        "$amount",
                        0
                    ]
                },
                expense: {
                    $cond: [
                        {
                            $eq: ["$type", "expense"]
                        },
                        "$amount",
                        0
                    ]
                }
            }).group({
                _id: null,
                income: {
                    $sum: "$income"
                },
                expense: {
                    $sum: "$expense"
                }
            }).addFields({
                balance: {
                    $subtract: ["$income", "$expense"]
                }
            })

        return result;
    }
}
