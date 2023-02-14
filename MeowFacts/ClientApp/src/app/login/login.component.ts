import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  loginNotSuccessful: boolean = false;

  constructor(private authService: AuthService, private router: Router, private spinnerService:SpinnerService) {

  }

  login() {
    this.spinnerService.showSpinner();
    this.authService.login(this.email, this.password)
      .subscribe(result => {
        this.spinnerService.hideSpinner();
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
