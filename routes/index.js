import express from 'express'
let router = express.Router();
import Product from '../models/product';

 // let's work with a global array of products for the file
let products = [
  new Product(1, "Turtoise Frame", "PW1689", 99.00, "Jon Snow", 1538359384),
  new Product(2, "Aviator Sunglasses", "PW134E", 74.00, "Samwell Tarly", 153316800),
  new Product(3, "Igneous Matte", "PW001Z", 64.00, "Arya Stark", 1566604800)
]

// The product list page
router.get('/products', (req, res, next) => {
  res.json(products);
})

// get an individual product by id
router.get('/product/:id', (req, res, next) => {
  let id = +req.params.id;
  let product = products.find(product => product.id === id);
  res.json(product);
})


// update a product with any field
router.patch('/products/:id', (req, res, next) => {
  let id = +req.params.id;
  // find the product to update
  let product = products.find(product => product.id === id);
  // assign the changed props to the product's props
  Object.assign(product, req.body);
  // force the last_modified prop to current time in UNIX timestamp
  let currentTime = Math.round((new Date()).getTime() / 1000);
  product.last_modified = currentTime
  // return the updated product
  res.send(product);
});

export default router;