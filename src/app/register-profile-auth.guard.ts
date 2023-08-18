import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/business/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterProfileAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (state.url.includes('/register-profile')) {
      return true; // Allow access to register-profile route
    }
    if (this.authService.isUserLoggedIn()) {
      // User is authenticated, allow access to the register-profile route
      return true;
    } else {
      // User is not authenticated, redirect to login
      this.router.navigate(['/login']);
      return false;
    }

  }
}
