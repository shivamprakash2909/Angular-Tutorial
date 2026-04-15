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
  name = 'Angular Tutorial';
  username = 'Shivamprakash';
  isAdmin = true;
  title2 = signal('angular signal')
  count = 100;
  getUser() {
    return this.username;
  }
}
