import { Component } from '@angular/core';
import { AuthService } from '../services/business/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.signUp(this.username, this.password).subscribe(
      (response) => {
        console.log({ response });
      },
      (error) => {
        console.error('Login failed', error);
        alert(error.message);
      }
    );
  }
  isOnRegisterPage(): boolean {
    const onRegisterPage = this.router.url.includes('/register');
    console.log('Is on register page:', onRegisterPage);
    return onRegisterPage;
}
}
