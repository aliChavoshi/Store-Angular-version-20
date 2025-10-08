import { Component, inject, OnInit } from '@angular/core';
import { ProductItem } from "./product-item/product-item";
import { ProductService } from './product.service';
import { ProductsListResponse } from '../../models/product';

@Component({
  selector: 'app-products',
  imports: [ProductItem],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  productList! : ProductsListResponse;
  private productService = inject(ProductService);
  ngOnInit(): void {
    this.productService.getProductList().subscribe(res => {
      this.productList = res;
    });
  }

}
