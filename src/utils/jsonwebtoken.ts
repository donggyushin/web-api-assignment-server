import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()
export const generateToken = (id: string): string => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET_KEY)
    return token
}

export const decodeToken = (token: string): string => {
    console.log('I received token?', token);
    let id = null
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        // @ts-ignore
        if (decoded.id) {
            //@ts-ignore
            id = decoded.id
        }

    } catch (err) {

    }

    // @ts-ignore
    return id
}