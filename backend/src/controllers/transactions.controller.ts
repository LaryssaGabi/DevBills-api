import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { TransactionsService } from "../services/transactions.servic";
import { CreateTransactionDTO } from "../dtos/transactions.dto";


export class TransactionsController {
    constructor(private transactionsService: TransactionsService) { }

    create = async (req: Request<unknown, unknown, CreateTransactionDTO>, res: Response, next: NextFunction) => {
        try {
            const { title, amount, categoryId, type, date } = req.body

            const result = await this.transactionsService.create({ title, amount, categoryId, type, date})

            return res.status(StatusCodes.CREATED).json(result)
        } catch (err) {
            next(err)
        }
    }


}