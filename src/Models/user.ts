import mongoose, { Schema, Model } from 'mongoose';
import { IUser } from '../Types/types';

const userSchema: Schema = new mongoose.Schema({
    username: String,
    password: String
})

const UserModel: mongoose.Model<IUser> = mongoose.model<IUser>('User', userSchema)
export default UserModel