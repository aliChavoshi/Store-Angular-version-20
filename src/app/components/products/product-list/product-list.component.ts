import { Component, inject, OnInit } from '@angular/core';
import { ProductsListResponse } from '../../../models/product';
import { ProductService } from '../product.service';
import { ProductItem } from "./product-item/product-item";
import { SideNavigation } from "../../home/side-navigation/side-navigation";
import { Sorting } from "../../home/sorting/sorting";
import { Pagination } from "../../home/pagination/pagination";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [ProductItem, SideNavigation, Sorting, Pagination],

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
