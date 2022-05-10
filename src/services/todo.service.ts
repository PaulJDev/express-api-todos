import axios from 'axios'
import type { Todo } from '../types/todo.type'

export const getTodos = async (): Promise<Todo[]> => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
    return data.slice(0, 25)
}
