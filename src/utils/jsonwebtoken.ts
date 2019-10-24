import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()
export const generateToken = (id: string): string => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET_KEY)
    return token
}

export const decodeToken = (token: string): string => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    // @ts-ignore
    return decoded.id
}