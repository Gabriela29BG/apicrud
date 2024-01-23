const  express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.get('/products', (req, res) => {
    res.send('mostrando product')
})

app.post('/products', (req, res) => {
    res.send('crendo product')
})

app.put('/products', (req, res) => {
    res.send('actualizando product')
})

app.delete('/products', (req, res) => {
    res.send('borrando product')
})

app.get('/products/:id', (req, res) => {
    res.send('obteniendo product')
})

app.listen(3000)
console.log(`server on port ${3000}`)