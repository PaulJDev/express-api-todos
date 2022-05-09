import express from 'express'
import 'dotenv/config'

import todosRouter from './routes/todos'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/ping', (_req, res) => {
    console.log("Ping!")
    res.send('poong')
})

app.use('/api/todos', todosRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})