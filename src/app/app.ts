import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Signin } from './signin/signin';

@Component({
  selector: 'app-root',
  imports: [Login, Signin],
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
