import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_tutoriAL');
  onInput(event: any) {
    console.log("Clicked", event);
    console.log(event.target.value)
  }
  onKeyUp(event: any) {
    console.log("Key up event", event.key)
  }
  onHover(event: any) {
    console.log("Hover event", event)
  }
  onLeave(event: any) {
    console.log("Leave event", event)
  }
  onBlur(event: any) {
    console.log("Blur event", event)
  }
  onFocus(event: any) {
    console.log("Focus event", event)
  }

}
