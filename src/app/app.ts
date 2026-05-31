import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_tutoriAL');
  isLoggedIn: boolean = false;
  isToggleed: boolean = true;
  toggleBox() {
    this.isToggleed = !this.isToggleed;
  }
}
