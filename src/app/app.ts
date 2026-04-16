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

  value: string = 'Shivam';
  value2: number = 10;
  istrue: boolean = true;

  sum(a: number, b: number): number {
    console.log(a + b)
    return a + b;
  }
}
