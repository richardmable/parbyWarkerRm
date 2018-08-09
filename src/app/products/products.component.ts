import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getAllProducts(): void {
    this.productService.getProducts()
    .subscribe(heroes => this.heroes = heroes);
  }

  updateProduct(product): void {
    if (!product) { return; }
    this.productService.updateProduct(product).subscribe();
  }

  deleteProduct(product: Product): void {
    this.products = this.products.filter(p => p !== product);
    this.productService.deleteProduct(product).subscribe();
  }

}