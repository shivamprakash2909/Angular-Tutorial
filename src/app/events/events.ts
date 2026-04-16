import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  count = signal(0);
  //event handler function
  increament() {
    this.count.update((c) => c + 1);
  }

  //event binding
  checkEvent(e: any) {
    console.log(e)
  }
  username = '';
  updateUserName(value: string) {
    this.username = value;
  }

  handleFormSubmit(e: any) {
    e.preventDefault();

    console.log("Form submitted");
  }
}
