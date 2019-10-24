import express from 'express';
import { makeNewAccount } from '../Controllers/user';
const router = express.Router()

router.post('/new', makeNewAccount)


export default router;