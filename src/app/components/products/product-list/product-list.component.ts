import { Component, inject, OnInit } from '@angular/core';
import { ProductsListResponse } from '../../../models/product';
import { ProductService } from '../product.service';
import { ProductItem } from "../product-item/product-item";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [ProductItem],

})
export class ProductListComponent implements OnInit {
  productList!: ProductsListResponse;
  private productService = inject(ProductService);
  ngOnInit(): void {
    this.productService.getProductList().subscribe(res => {
      this.productList = res;
    });
  }

}
