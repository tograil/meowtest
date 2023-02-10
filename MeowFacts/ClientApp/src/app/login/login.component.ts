import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  loginNotSuccessful: boolean = false;

  constructor(private authService: AuthService, private router: Router) {

  }

  login() {
    this.authService.login(this.email, this.password)
      .subscribe(result => {
        if (result) {
          this.loginNotSuccessful = false;
          this.router.navigate([ "/" ]);
        }
        else {
          this.loginNotSuccessful = true;
        }
      });
  }
}
