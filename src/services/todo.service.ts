import axios from 'axios'
import { Todo, TodoWhitoutSensitiveData } from '../types/todo.type'

const URL = process.env.URL as string

export const getTodos = async (): Promise<TodoWhitoutSensitiveData[]> => {
    const { data } = await axios.get(URL)
    return data.map((todo: Todo)  => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { userId, ...rest } = todo
        return rest
    })
}

export const getTodoById = async (id: number): Promise<Todo | null> => {
    const { data } = await axios.get(URL)
    return data.find(({ id: todoId }: Pick<Todo, 'id'>) => todoId === id)
}

