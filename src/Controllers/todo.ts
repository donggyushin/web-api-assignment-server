import { Request, Response } from 'express';
import { decodeToken } from '../utils/jsonwebtoken'
import UserModel from '../Models/user'
import { TodoResponse, ITodo, IUser, TodosResponse } from '../Types/types';
import TodoModel from '../Models/todo';

export const getTodos = async (req: Request, res: Response) => {
    // @ts-ignore
    const user: IUser = req.user
    console.log('user:', user)
    let result: TodosResponse = {
        ok: null,
        error: null,
        todos: null
    }

    try {

        const todos: ITodo[] = await TodoModel.find({
            userId: user.id
        })
        result = {
            ok: true,
            error: null,
            todos
        }


    } catch (err) {
        result = {
            ok: false,
            error: err.message,
            todos: null
        }
    }

    res.json(result)
    return;

}

export const newTodo = async (req: Request, res: Response) => {
    const { text } = req.body;
    const { jwt } = req.headers;
    let result: TodoResponse = {
        ok: null,
        error: null,
        todo: null
    }

    try {

        // @ts-ignore
        const user = await UserModel.findById(decodeToken(jwt))
        if (user === null) {
            result = {
                ok: false,
                error: '로그인해주세욥',
                todo: null
            }

            res.json(result)
            return;
        }
        const todo: ITodo = await new TodoModel({
            userId: user.id,
            text
        })
        todo.save()
        result = {
            ok: true,
            error: null,
            todo
        }
        res.json(result)
        return;

    } catch (err) {
        result = {
            ok: false,
            error: err.message,
            todo: null
        }
        res.json(result)
        return;
    }



}