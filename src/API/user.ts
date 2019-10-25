import express from 'express';
import { makeNewAccount, login } from '../Controllers/user';
const router = express.Router()

router.post('/new', makeNewAccount)
router.post('/login', login)


export default router;