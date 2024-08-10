import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { TransactionsService } from "../services/transactions.servic";
import { CreateTransactionDTO, GetDashboardDTO, GetFinancialEvolutionDTO, indexTransactionsDTO } from "../dtos/transactions.dto";
import { BodyRequest, QueryRequest } from "./types";


export class TransactionsController {
    constructor(private transactionsService: TransactionsService) { }

    create = async (req: BodyRequest<CreateTransactionDTO>, res: Response, next: NextFunction) => {
        try {
            const { title, amount, categoryId, type, date } = req.body

            const result = await this.transactionsService.create({ title, amount, categoryId, type, date })

            return res.status(StatusCodes.CREATED).json(result)
        } catch (err) {
            next(err)
        }
    }


    index = async (req: QueryRequest<indexTransactionsDTO>, res: Response, next: NextFunction) => {
        try {
            const { title, endDate, beginDate, categoryId } = req.query;
            const result = await this.transactionsService.index({ title, endDate, beginDate, categoryId })

            return res.status(StatusCodes.OK).json(result)
        } catch (err) {
            next(err)
        }
    }


    getDashboard = async (req: QueryRequest< GetDashboardDTO>, res: Response, next: NextFunction) => {
        try {
            const { endDate, beginDate } = req.query;
            const result = await this.transactionsService.getDashboard({ endDate, beginDate })

            return res.status(StatusCodes.OK).json(result)
        } catch (err) {
            next(err)
        }
    }


    getFinancialEvolution = async (req: QueryRequest< GetFinancialEvolutionDTO>, res: Response, next: NextFunction) => {
        try {
            const { year } = req.query;
            const result = await this.transactionsService.getFinancialEvolution({ year })

            return res.status(StatusCodes.OK).json(result)
        } catch (err) {
            next(err)
        }
    }



}