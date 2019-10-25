"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_1 = require("../Controllers/user");
var user_2 = require("../Middlewares/user");
var router = express_1.default.Router();
router.get('', user_2.verifyUserMiddleware, user_1.userInfo);
router.post('/new', user_1.makeNewAccount);
router.post('/login', user_1.login);
exports.default = router;
