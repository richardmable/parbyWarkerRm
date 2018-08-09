import express from 'express';
let router = express.Router();
import Product from '../models/product';

 // let's work with a global array of products for the file
let products = [
  new Product(1, "Turtoise Frame", "PW1689", 99.00, "Jon Snow", 1530059384),
  new Product(2, "Aviator Sunglasses", "PW134E", 74.00, "Samwell Tarly", 1503168006),
  new Product(3, "Igneous Matte", "PW001Z", 64.00, "Arya Stark", 1466600800)
];

// always display something at the root
router.get('/', (req, res, next) => {
  return res.json("We're up!");
});

// The product list page
router.get('/products', (req, res, next) => {
  if (products.length > 0){
    res.json(products);
  } else {
    res.json('Looks like there are no products at all!')
  }
});

// get an individual product by id
router.get('/product/:id', (req, res, next) => {
  let id = +req.params.id;
  let product = products.find(product => product.id === id);
  if (product){
    res.json(product);
  } else {
    res.json('Could not find a product with that id.')
  }
});

// update a product with any prop, use patch as usually just updating one prop
router.patch('/products/:id', (req, res, next) => {
  let id = +req.params.id;
  // find the product to update
  let product = products.find(product => product.id === id);
  if (product){
    // assign the changed props to the product's props
    Object.assign(product, req.body);
    // force the lastModified prop to current time in UNIX timestamp
    let currentTime = Math.round((new Date()).getTime() / 1000);
    product.lastModified = currentTime;
    // return the updated product
    res.send(product);
  } else {
    res.send('Could not find product with that id to update')
  }
});

// delete a product
router.delete('/products/:id', (req, res, next) => {
  let id = +req.params.id;
  // find the product to update
  let product = products.find(product => product.id === id);
  if (product){
    // find the index of that product in the products array and remove it
    products.splice( products.indexOf(product), 1 );
    res.send('Product deleted.');
  } else {
    res.send('Product could not be found for deletion.');
  }
});

export default router;