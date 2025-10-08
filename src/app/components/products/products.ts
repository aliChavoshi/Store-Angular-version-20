import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavigation } from "../home/side-navigation/side-navigation";
import { Sorting } from "../home/sorting/sorting";
import { Pagination } from "../home/pagination/pagination";


@Component({
  selector: 'app-products',
  imports: [RouterOutlet, SideNavigation, Sorting, Pagination],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

}
