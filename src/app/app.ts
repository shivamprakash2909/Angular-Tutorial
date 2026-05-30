import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_tutoriAL');
  name: string = "";
  city: string = "";
  email: string = "";
  updateName(name: string) {
    this.name = name;
  }

  getEmail(email: string) {
    this.email = email;
  }
}
