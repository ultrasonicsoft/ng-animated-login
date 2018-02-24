import { Component } from '@angular/core';
import '../assets/login-animation.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';  

  ngAfterViewInit() {    
    (window as any).initialize();
  }
}
