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

export interface ITodo extends mongoose.Document {
    text: string,
    done: boolean,
    userId: string
}