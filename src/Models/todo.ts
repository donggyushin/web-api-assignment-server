import mongoose, { Schema } from 'mongoose'
import { ITodo } from '../Types/types'

const todoSchema: Schema = new mongoose.Schema({
    text: String,
    done: {
        type: Boolean,
        default: false
    },
    userId: String
})

const TodoModel: mongoose.Model<ITodo> = mongoose.model<ITodo>('Todo', todoSchema)
export default TodoModel