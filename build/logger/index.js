"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const path_1 = __importDefault(require("path"));
const logger = winston_1.default.createLogger({
    level: 'info',
    format: winston_1.default.format.combine(winston_1.default.format.errors({ stack: true }), winston_1.default.format.timestamp(), winston_1.default.format.json()),
    defaultMeta: { service: 'hamburguergama' },
    transports: [
        new winston_1.default.transports.File({ filename: path_1.default.resolve('src', 'infra', 'logs', 'error.log'), level: 'error' }),
        new winston_1.default.transports.File({ filename: path_1.default.resolve('src', 'infra', 'logs', 'combined.log'), }),
    ],
});
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston_1.default.transports.Console({
        format: winston_1.default.format.simple(),
    }));
}
exports.default = logger;
