import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_tutoriAL');
  counter = signal(0);
  increament() {
    this.counter.update((c) => c + 1);
  }
  decreament() {
    if (this.counter() > 0) {
      this.counter.update((c) => c - 1)
    }
  }
  reset() {
    this.counter.set(0);
  }
}
