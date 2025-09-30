import { Component } from '@angular/core';
import { SideNavigation } from "./side-navigation/side-navigation";
import { Products } from "../products/products";
import { Pagination } from "./pagination/pagination";
import { Sorting } from "./sorting/sorting";

@Component({
  selector: 'app-home',
  imports: [SideNavigation, Products, Pagination, Sorting],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
