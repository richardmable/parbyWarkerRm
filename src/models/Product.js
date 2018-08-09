export default class Product {
  constructor(id, name, code, price, creator, last_modified){
    this.id = id;
    this.name = name;
    this.code = code;
    this.price = price;
    this.creator = creator;
    this.last_modified = last_modified;
  }
  getProduct(){
    return this;
  }
}