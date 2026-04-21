import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_tutoriAL');
  count = signal<number>(10);
  doubleCount = computed<number>(() => this.count() * 2);
  tripleCount = computed<number>(() => this.count() * 3)
  increament() {
    this.count.update(c => c + 1)
  }
  firstName = signal<string>('Shivam');
  lastName = signal<string>('Prakash');
  fullName = computed<string>(() => this.firstName() + ' ' + this.lastName())
  prices = signal<number[]>([10, 20, 30, 40, 50, 60]);
  cartValue = computed<number>(() => { return this.prices().reduce((curr, acc) => curr + acc, 0) });

}
