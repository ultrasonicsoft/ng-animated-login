import { Component } from '@angular/core';

import '../assets/login-animation.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: string;
  password: string;

  ngAfterViewInit() {
    (window as any).initialize();
  }

  login(){
    console.log(`email: ${this.email} password: ${this.password}`)
    alert(`Email: ${this.email} Password: ${this.password}`)
  }
}
