import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

export interface Product {
  id: number;
  name: string;
  code: string;
  price: number;
  creator: string;
  lastModified: string;
  }
}

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8000/products');
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>('http://localhost:8000/product/' + id);
  }

  insertProduct(product: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:8000/products', product);
  }

  updateProduct(product: Product): Observable<void> {
    return this.http.patch<void>('http://localhost:8000/poduct/' + product.id, product);
  }

  deleteProduct(id: number) {
    return this.http.delete('http://localhost:8000/product/' + id);
  }
}



