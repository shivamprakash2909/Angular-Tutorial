import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_tutoriAL');
  items: string[] = ['Item1', 'Item2', 'Item3', 'Item4']
  users = [
    { id: 1, name: "Shivam1" },
    { id: 2, name: "Shivam2" },
    { id: 3, name: "Shivam3" },
    { id: 4, name: "Shivam4" },
    { id: 5, name: "Shivam5" }
  ]
}

