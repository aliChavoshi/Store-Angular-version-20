import { Component } from '@angular/core';
import { Products } from "../products/products";
import { ProductListComponent } from "../products/product-list/product-list.component";
import { SideNavigation } from "./side-navigation/side-navigation";
import { Sorting } from "./sorting/sorting";
import { Pagination } from "./pagination/pagination";

@Component({
  selector: 'app-home',
  imports: [ProductListComponent, SideNavigation, Sorting, Pagination],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
