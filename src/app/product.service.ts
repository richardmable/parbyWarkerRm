import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './product'


@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}
  private serverApi = 'http://localhost:8080';

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.serverApi}/products`);
  }

  updateProduct(product: Product): Observable<void> {
    return this.http.patch<void>(`${this.serverApi}/product/` + product.id, product);
  }

  deleteProduct(product) {
    return this.http.delete(`${this.serverApi}/product/` + product.id);
  }
}
