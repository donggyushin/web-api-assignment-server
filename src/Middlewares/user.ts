import { Request, Response, NextFunction } from 'express'
import UserModel from '../Models/user'
import { decodeToken } from '../utils/jsonwebtoken'
export const verifyUserMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { jwt } = req.headers;

    if (jwt === null || jwt === undefined || jwt === "") {
        res.json({
            ok: false,
            error: '로그인해주세욥!'
        })
        return;
    }
    // @ts-ignore
    const user = await UserModel.findById(decodeToken(jwt))
    if (user === null) {
        res.json({
            ok: false,
            error: '로그인해주세욥!'
        })
        return;
    } else {
        // @ts-ignore
        req.user = user
        next()
        return;
    }
}