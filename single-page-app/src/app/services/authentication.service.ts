import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLoggedIn = false;

  constructor(private router: Router) {

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        
        this.isLoggedIn = true;
        this.router.navigate(['/profile']);
      } else {
        // No user is signed in.
        
        this.isLoggedIn = false;
        this.router.navigate(['/frontpage']);
        //window.location.href = "http://localhost:4200/frontpage";
      }
    });

  }
}
