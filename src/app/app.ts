import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header]
})
export class App {
  protected readonly title = signal('Store-Angular');
}
