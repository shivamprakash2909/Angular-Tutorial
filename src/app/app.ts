import { Component, effect, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_tutoriAL');
  isDarkMode = signal(false);
  constructor() {
    effect(() => {
      if (this.isDarkMode()) {
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
      } else {
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
      }
    }
    )
  }
  toggle() {
    this.isDarkMode.update(val => !val);
  }
}
