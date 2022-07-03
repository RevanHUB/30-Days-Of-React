const { products } = require('./products_db');
const express = require('express');
const port = 3001;
const cors = require('cors');
const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.get('/', cors(), (req, res) => {
    res.send("Welcome to the shop server api.");
});

app.get('/products', cors(), (req, res) => {
    res.send(products);
});

app.get('/products/:id', cors(), (req, res) => {
    let id = req.params.id;
    let product = products.find(product => product.id == id);
    res.send(product);
});
app.get('/name/:name', cors(), (req, res) => {
    let name = req.params.name;
    let nameFiltered = name.toLowerCase();
    let product = products.map(search => (search.name.toLowerCase().includes(nameFiltered)) ? search : null ).filter((product) => product != null);
    res.send(product);
});
app.get('/sort/asc', cors(), (req, res) => {
    let product = products.sort((a, b) => (a.applyDiscount === true || b.applyDiscount === true)? a.discount - b.discount : a.price - b.price);
    res.send(product);
});
app.get('/sort/desc', cors(), (req, res) => {
    let product = products.sort((a, b) => (a.applyDiscount === true || b.applyDiscount === true)? b.discount - a.discount : b.price - a.price);
    res.send(product);
});
app.listen(port, () => {
    console.log('Products queueing on: ' + port);
});