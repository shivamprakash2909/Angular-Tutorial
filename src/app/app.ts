import { Component, signal } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, CurrencyPipe, DatePipe, JsonPipe } from '@angular/common';
import { ShortNamePipe } from './pipes/short-name-pipe';

@Component({
  selector: 'app-root',
  imports: [UpperCasePipe, LowerCasePipe, CurrencyPipe, DatePipe, JsonPipe, ShortNamePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_tutoriAL');
  fName = signal<string>('shivam')
  lName = signal<string>('prakash')
  amount = signal<number>(100)
  dateToday = new Date()
  user = {
    name: "Shivam",
    age: 24
  }
  fullName = "Shivam Prakash"
}
