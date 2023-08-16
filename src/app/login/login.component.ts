import { Component } from '@angular/core';
import { AuthService } from '../services/business/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  

  onSubmit() {
 
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Logged in successfully');
        // Handle successful login (e.g., navigate to another page)
        // After successful login
        console.log(response.token);
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('userId', response.userId.toString());
        this.router.navigate(['/register']);

        
        //To retrieve the token later:
        //const authToken = localStorage.getItem('authToken');
      },
      (error) => {
        console.error('Login failed', error);
        alert(error.message);
      }
    );
  }
  isOnRegisterPage(): boolean {
    return this.router.url.includes('/register');
}
}