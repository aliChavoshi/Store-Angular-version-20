import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, RouterOutlet, Footer]
})
export class App {
  protected readonly title = signal('Store-Angular');
}
