const express = require('express')
const app = express()
const port = 3000

app.get('/back', (req, res) => {
    let calculoContaminacion = Math.random() * 100 
    res.status("202").send({calculoContaminacion})
})

app.get('/front', (req, res) => {
    res.status("202").send(`<h1>Soy el front</h1>`)
})

app.post('/', (req, res) => {
    res.send('Hello World POST!')
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
