import { Component } from '@angular/core';
import { SideNavigation } from "./side-navigation/side-navigation";
import { Products } from "../products/products";

@Component({
  selector: 'app-home',
  imports: [SideNavigation, Products],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
