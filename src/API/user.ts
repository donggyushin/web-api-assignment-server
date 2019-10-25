import express from 'express';
import { makeNewAccount, login, userInfo } from '../Controllers/user';
import { verifyUserMiddleware } from '../Middlewares/user';

const router = express.Router()

router.get('', verifyUserMiddleware, userInfo)
router.post('/new', makeNewAccount)
router.post('/login', login)


export default router;