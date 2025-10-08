import { Component, input } from '@angular/core';
import { Product } from '../../../models/product';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [DecimalPipe],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItem {
  product = input.required<Product>();
}
