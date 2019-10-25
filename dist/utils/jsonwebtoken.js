"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.generateToken = function (id) {
    var token = jsonwebtoken_1.default.sign({ id: id }, process.env.JWT_SECRET_KEY);
    return token;
};
exports.decodeToken = function (token) {
    var id = null;
    try {
        var decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_KEY);
        // @ts-ignore
        if (decoded.id) {
            //@ts-ignore
            id = decoded.id;
        }
    }
    catch (err) {
    }
    // @ts-ignore
    return id;
};
