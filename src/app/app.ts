import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { count } from 'rxjs/internal/operators/count';

interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_tutoriAL');
  count = signal<number>(0);
  name = signal<string>("Angular");
  isAdmin = signal<boolean>(true);
  user = signal<{ name: string, age: number }>({ name: "Shivam", age: 20 });
  user1 = signal<User>({ name: "Shivam", age: 22 });
  numbers = signal<number[]>([1, 3, 4, 5, 6])
  updateCount() {
    this.count.update(c => c + 1);
    // this.count.set(v)
  }
}
