"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb://localhost/webapiassignment', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, "\u274Cconnection error:"));
db.once('open', function () { return console.log('✅ Database connected!'); });
