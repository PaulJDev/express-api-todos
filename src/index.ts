import express from 'express'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/ping', (_, res) => {
    console.log("Ping!")
    res.send('poong')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})