import mongoose from "mongoose";
import { title } from "process";
import { CategorySchema } from "./category.schema";

const TransactionSchema = new mongoose.Schema({
    title: String,
    amount: Number,
    type: String,
    date: Date,
    category: CategorySchema,
},
    { versionKey: false }
)

export const TrasactionsModel = mongoose.model(
    'Transaction',
    TransactionSchema
)