import { Component } from '@angular/core';
import { SideNavigation } from "./side-navigation/side-navigation";

@Component({
  selector: 'app-home',
  imports: [SideNavigation],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
