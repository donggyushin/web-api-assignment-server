import express from 'express';
import { newTodo, getTodos, editTodo, deleteTodo, toggleTodo } from '../Controllers/todo';
import { verifyUserMiddleware } from '../Middlewares/user'
const router = express.Router();

router.delete('/:jwt/:todoId', deleteTodo);
router.post('', verifyUserMiddleware, newTodo);
router.get('', verifyUserMiddleware, getTodos);
router.put('', verifyUserMiddleware, editTodo);
router.put('/toggle', verifyUserMiddleware, toggleTodo);


export default router;