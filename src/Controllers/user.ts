import { Request, Response } from 'express'
import { LoginResponse } from '../Types/types'
import UserModel from '../Models/user'
import { encrypttext } from '../utils/crypto'
import { generateToken } from '../utils/jsonwebtoken'

export const makeNewAccount = async (req: Request, res: Response) => {
    const { username, password } = req.body
    let result: LoginResponse = {
        ok: null,
        error: null,
        jwt: null
    }
    // check if there is a user with the username
    const existingUser = await UserModel.find({
        username
    })
    if (existingUser.length !== 0) {
        // If the user exists, 
        result = {
            ok: false,
            error: '다른 아이디를 선택하세요. ',
            jwt: null
        }
    } else {
        try {
            const user = await new UserModel({
                username,
                password: encrypttext(password)
            }).save()
            result = {
                ok: true,
                error: null,
                jwt: generateToken(user.id)
            }
        } catch (err) {
            result = {
                ok: false,
                error: err.message,
                jwt: null
            }
        }
    }
    res.json(result)
    return;

}