import express from 'express'
let router = express.Router();
import Product from '../models/product';

 // let's work with a global array of products
let products = [
  new Product(1, "Turtoise Frame", "PW1689", 99.00, "Jon Snow", 1538359384),
  new Product(2, "Aviator Sunglasses", "PW134E", 74.00, "Samwell Tarly", 153316800),
  new Product(3, "Igneous Matte", "PW001Z", 64.00, "Arya Stark", 1566604800)
]

// The product list page
router.get('/products', (req, res, next) => {
  res.json(products);
})

// get an individual product
router.get('/product/:id', (req, res, next) =>{
  let product = products.find(product => product.id === +req.params.id)
  res.json(product)
})

export default router;