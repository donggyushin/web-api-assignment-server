import { Request, Response } from 'express'
import { LoginResponse, IUser, UserResponse } from '../Types/types'
import UserModel from '../Models/user'
import { generateToken } from '../utils/jsonwebtoken'
import { encrypttext2 } from '../utils/sha512'

export const userInfo = async (req: Request, res: Response) => {
    // @ts-ignore
    const user: IUser = req.user;
    let result: UserResponse = {
        ok: null,
        error: null,
        user
    }
    res.json(result);
}

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    let result: LoginResponse = {
        ok: null,
        error: null,
        jwt: null
    }
    const encryptedPassword = encrypttext2(password)
    try {
        const user = await UserModel.findOne({
            username,
            password: encryptedPassword
        })

        if (user) {
            result = {
                ok: true,
                error: null,
                jwt: generateToken(user.id)
            }
        } else {
            result = {
                ok: false,
                error: '유저없거나 비밀번호 다름',
                jwt: null
            }
        }

    } catch (err) {
        result = {
            ok: false,
            error: err.message,
            jwt: null
        }
    }



    res.json(result)
}

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
                password: encrypttext2(password)
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