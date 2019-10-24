import mongoose from 'mongoose'

export interface LoginResponse {
    ok: boolean,
    error: string,
    jwt: string
}

export interface IUser extends mongoose.Document {
    username: string,
    password: string
}