import { Component } from '@angular/core';
import { ProductItem } from "./product-item/product-item";

@Component({
  selector: 'app-products',
  imports: [ProductItem],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

}
