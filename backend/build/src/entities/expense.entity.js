"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expense = void 0;
class Expense {
    constructor({ amount, color, title, _id }) {
        this._id = _id;
        this.amount = amount;
        this.color = color;
        this.title = title;
    }
}
exports.Expense = Expense;
