"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var dotenv_1 = __importDefault(require("dotenv"));
require("./Database/mongoose");
dotenv_1.default.config();
app_1.default.listen(process.env.PORT, function () { return console.log("\u2705 localhost:4000 is listeing"); });
