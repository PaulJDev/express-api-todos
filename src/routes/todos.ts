import express from 'express'
import { getTodos, getTodoById } from '../services/todo.service'

const router = express.Router()

router.get('/', (_req, res) => {
    getTodos().then(todos => res.send(todos))
})

router.post('/', (_req, res) => {
    res.send('Creating a new todo')
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const todo = await getTodoById(+id)

    todo ? res.send(todo) : res.status(404).send('Todo not found')
})

export default router