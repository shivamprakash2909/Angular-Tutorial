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
  name: string = "";
  city: string = "";
  email: string = "";
  updateName(name: string) {
    this.name = name;
  }


  updateCity(city: string) {
    this.city = city;
  }
  getEmail(email: string) {
    this.email = email;
  }
}
