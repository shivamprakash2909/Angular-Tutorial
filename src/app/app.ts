import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_tutoriAL');

  count = 0;
  handleClick() {
    let abc = "Hi there";
    console.log("Button Clicked", abc);
    this.sayHello();
  }
  sayHello() {
    console.log("Hello world!!")
  }
}
