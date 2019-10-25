import express from 'express';
import { newTodo, getTodos, editTodo, deleteTodo, toggleTodo } from '../Controllers/todo';
import { verifyUserMiddleware } from '../Middlewares/user'
const router = express.Router();

router.post('', verifyUserMiddleware, newTodo);
router.get('', verifyUserMiddleware, getTodos);
router.put('', verifyUserMiddleware, editTodo);
router.put('/toggle', verifyUserMiddleware, toggleTodo);
router.delete('', verifyUserMiddleware, deleteTodo);


export default router;