import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

const messages = [ { id: 1, name: "Admin", text: "C" }, { id: 1, name: "Admin", text: "Cddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaaaaaaaaa" }, { id: 1, name: "Admin", text: "C" }, { id: 1, name: "Admin", text: "Cddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaaaaaaaaa" }, { id: 1, name: "Admin", text: "C" }, { id: 1, name: "Admin", text: "Cddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaaaaaaaaa" }, { id: 1, name: "Admin", text: "C" }, { id: 1, name: "Admin", text: "Cddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaaaaaaaaa" } ]

app.get('/messages', (req, res) => {
    res.json(messages)
})

app.post('/add-message', (req, res) => {
    const { name, text } = req.body

    messages.push({ id: Math.random(), name, text }, ...messages)
})

app.listen(9999, () => console.log("Server OK!", messages))