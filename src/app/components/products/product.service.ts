import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product, ProductsListResponse } from '../../models/product';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '../../core/configs/appConfig.token';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private config = inject(APP_CONFIG);
  constructor() { }

  getProductList(): Observable<ProductsListResponse> {
    return this.http.get<ProductsListResponse>(`${this.config.baseUrl}/products`);
  }
  getProduct(id:number){
    return this.http.get<Product>(`${this.config.baseUrl}/products/${id}`);
  }
}
