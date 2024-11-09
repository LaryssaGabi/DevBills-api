"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupMongo = setupMongo;
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
async function setupMongo() {
    try {
        if (mongoose_1.default.connection.readyState === 1) {
            return;
        }
        console.log('MONGO_URL:', process.env.MONGO_URL);
        console.log('🎲 Connecting to DB...');
        await mongoose_1.default.connect(process.env.MONGO_URL);
        console.log('👽 Connected!');
    }
    catch (error) {
        console.error('Error details:', error);
        throw new Error('🚨 Error connecting to DB');
    }
}
