import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductsListResponse } from '../../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  constructor() { }

  getProductList(): Observable<ProductsListResponse> {
    return this.http.get<ProductsListResponse>('https://dummyjson.com/products');
  }
}
