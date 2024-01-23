function UserRouter(app){
    app.get('/UserName', (req, res) => {
        res.json(products.json())
    });
    
    app.post('/profile', (req, res) => {
        const newProduct = {...req.body, id: products.length + 1}
        res.push(newProduct)
        res.send(newProduct)
    });
}

module.exports = UserRouter