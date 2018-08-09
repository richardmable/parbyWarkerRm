export default class Product {
  constructor(id, name, code, price, creator, lastModified){
    this.id = id;
    this.name = name;
    this.code = code;
    this.price = price;
    this.creator = creator;
    this.lastModified = lastModified;
  }
  getProduct(){
    return this;
  }
}