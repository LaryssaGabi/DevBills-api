import { CreateTransactionDTO } from "../../dtos/transactions.dto"
import { Transaction } from "../../entities/transactions.entity"
import { TrasactionsModel } from "../schemas/transactions.schema"

export class TransactionsRepository {

    constructor(private model: typeof TrasactionsModel) { }

    async create({ title, date, amount, type, category }: Transaction): Promise<Transaction> {
        const createdTrasactions = await this.model.create({ title, date, amount, type, category })

        return createdTrasactions.toObject<Transaction>()
    }


    async index(): Promise<Transaction[]> {
        const transactions = await this.model.find()
        const transactionsMap = transactions.map((item) => item.toObject<Transaction>())

        return transactionsMap
    }
}
