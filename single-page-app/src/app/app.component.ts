import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'single-page-app';

  constructor(private authService: AuthenticationService){
    //AuthenticationService is injected in AppComponent to have global firebase.auth().onAuthStateChanged instantiated/working

  }
}
