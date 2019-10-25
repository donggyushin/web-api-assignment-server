import express from 'express';
import { newTodo, getTodos } from '../Controllers/todo';
import { verifyUserMiddleware } from '../Middlewares/user'
const router = express.Router();

router.post('', verifyUserMiddleware, newTodo)
router.get('', verifyUserMiddleware, getTodos);

export default router;