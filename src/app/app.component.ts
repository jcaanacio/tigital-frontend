import { Component } from '@angular/core';
import { AuthService } from './services/business/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tigital-frontend';

  constructor(private authService: AuthService, private router: Router) {}
  isOnRegisterPage(): boolean {
    return this.router.url.includes('/register');
  }
  get auth(): AuthService{
    return this.authService;
  }
}
