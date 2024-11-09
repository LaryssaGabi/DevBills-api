"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandle = errorHandle;
const app_error_1 = require("../errors/app.error");
const http_status_codes_1 = require("http-status-codes");
function errorHandle(error, _, res, __) {
    if (error instanceof app_error_1.AppError) {
        return res.status(error.statusCode).json({ menssage: error.message });
    }
    return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
}
