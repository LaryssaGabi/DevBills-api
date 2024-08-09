import { CreateTransactionDTO, indexTransactionsDTO } from "../../dtos/transactions.dto"
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

        if (beginDate || endDate){
            whereParams.date = {
                ...(beginDate && { $gte: beginDate}),
                ...(endDate && { $lte: endDate })
            }
        }

        const transactions = await this.model.find(whereParams);
        const transactionsMap = transactions.map((item) => item.toObject<Transaction>())

        return transactionsMap
    }
}
