"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var todo_1 = require("../Controllers/todo");
var user_1 = require("../Middlewares/user");
var router = express_1.default.Router();
router.delete('/:jwt/:todoId', todo_1.deleteTodo);
router.post('', user_1.verifyUserMiddleware, todo_1.newTodo);
router.get('', user_1.verifyUserMiddleware, todo_1.getTodos);
router.put('', user_1.verifyUserMiddleware, todo_1.editTodo);
router.put('/toggle', user_1.verifyUserMiddleware, todo_1.toggleTodo);
exports.default = router;
