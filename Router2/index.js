const  express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

const HomeRouters = require('./routes/home')
const UserRouter = require('./routes/user')

app.set('case sensitive routing', true)
app.set('appName', 'Expres Coourse')
app.set('port', 4000)

const products = [ 
    {
        id: 1,
        name: "laptop",
        price:300
    }
 ]

app.use(morgan('dev'))



app.use(HomeRouters)
app.use(UserRouter)


app.get('/UserName', (req, res) => {
    res.json(products.json())
});

app.post('/profile', (req, res) => {
    const newProduct = {...req.body, id: products.length + 1}
    res.push(newProduct)
    res.send(newProduct)
});


app.use("./public",express.static(path.join(__dirname,'./public')))
app.use("./public",express.static('./public'))//Se coloca al final de las rutas


app.listen(app.get('port'));
console.log(`Server ${app.get('appName')} on port ${app.get('port')}`)