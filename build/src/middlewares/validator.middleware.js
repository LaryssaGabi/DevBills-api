"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamsType = void 0;
exports.validator = validator;
const zod_1 = require("zod");
const app_error_1 = require("../errors/app.error");
const http_status_codes_1 = require("http-status-codes");
var ParamsType;
(function (ParamsType) {
    ParamsType["QUERY"] = "query";
    ParamsType["BODY"] = "body";
})(ParamsType || (exports.ParamsType = ParamsType = {}));
function validator(params) {
    return (req, res, next) => {
        const result = zod_1.z.object(params.schema).safeParse(req[params.type]);
        if (!result.success) {
            const erroFormatted = result.error.issues.map(item => `${item.path.join('.')} : ${item.message}`);
            throw new app_error_1.AppError(erroFormatted, http_status_codes_1.StatusCodes.UNPROCESSABLE_ENTITY);
        }
        req[params.type] = result.data;
        next();
    };
}
