"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importStar(require("express"));
const routes_1 = require("./routes");
const database_1 = require("./database");
const error_handler_middleware_1 = require("./middlewares/error-handler.middleware");
const cors_1 = __importDefault(require("cors"));
(0, database_1.setupMongo)().then(() => {
    const app = (0, express_1.default)();
    const port = 3333;
    app.use((0, cors_1.default)({
        origin: process.env.FRONT_URL,
        credentials: true
    }));
    app.use((0, express_1.json)());
    app.use(routes_1.routes);
    app.use(error_handler_middleware_1.errorHandle);
    app.listen(port, () => {
        console.log(`🚀 App is running at port ${port}!`);
        console.log('FRONT_URL:', process.env.FRONT_URL);
    });
});
