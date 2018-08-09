import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product'



@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8000/products');
  }
  /** not used at the moment */
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>('http://localhost:8000/product/' + id);
  }
  /** not used at the moment */
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



