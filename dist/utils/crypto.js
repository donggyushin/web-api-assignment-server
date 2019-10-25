"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_js_1 = __importDefault(require("crypto-js"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.encrypttext = function (text) {
    var ciphertext = crypto_js_1.default.AES.encrypt(text, process.env.AES_SECRET_KEY);
    return ciphertext.toString();
};
