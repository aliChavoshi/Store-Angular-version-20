import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.css']
})
export class ProductSingleComponent implements OnInit {
  product!: Product;
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  id!: number;
  constructor() {
    this.route.params.subscribe(res => {
      this.id = res['id'];
    });
  }

  ngOnInit() {
    this.productService.getProduct(this.id).subscribe(res => {
      this.product = res;
    });
  }
}
