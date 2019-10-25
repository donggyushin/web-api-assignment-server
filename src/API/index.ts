import express from 'express';
import user from './user';
import todo from './todo';
const router = express.Router();
router.use('/user', user)
router.use('/todo', todo)

export default router;