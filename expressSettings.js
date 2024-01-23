const  express = require('express')
const morgan = require('morgan')

const app = express()

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

app.use(express.static('./public'))
app.use(morgan("dev"));

app.set('appName', 'Express Course')


app.get('/products', (req, res) => {
    res.json(products.json())
});

app.post('/products', (req, res) => {
    const newProduct = {...req.body, id: products.length + 1}
    res.push(newProduct)
    res.send(newProduct)
});

app.put('/products', (req, res) => {
    const newData = req.body
    const productFound = products.find(
        (p) => p.id === parseInt(req.params.id));

    if (!productFound)
         return res.status(404).json({
             message:"Product not found"
    });
    
    Products = products.map(p => p.id === parseInt(req.params.id) ? {...p, ...newData} : p)
    
    res.json({
        message:"Product updated successfully"
    });

});

app.delete('/products', (req, res) => {
    const productFound = products.find(
        (p) => p.id === parseInt(req.params.id));

    if (!productFound)
         return res.status(404).json({
             message:"Product not found"
    });  
    products = products.filter(p => p.id !== parseInt(req.params.id));
    res.sendstatus(204);   
});

app.get('/products/:id', (req, res) => {
    console.log(req.params.id);
    const productFound = products.find(
        (p) => p.id === parseInt(req.params.id));

        if (!productFound)
             return res.status(404).json({
                 message:"Product not found"
    });

    console.log(productFound)
    res.send('conteniendo un producto')
});

app.listen(app.get('port'));
console.log(`Server ${app.get('appName')} on port ${app.get('port')}`)