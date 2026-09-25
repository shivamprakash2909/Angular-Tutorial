import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  imageUrl = "https://static.vecteezy.com/system/resources/thumbnails/053/733/179/small/every-detail-of-a-sleek-modern-car-captured-in-close-up-photo.jpg"
  isDisabled = true;
  placeholder = 'Enter your name';
  username = 'shivam';
  color = 'red';
  count = signal(11);
}
