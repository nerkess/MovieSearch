import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'tmdb-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent {

  isLoginMode = true;


  constructor() {

  }

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm): void {
    authForm.reset();
  }
}
