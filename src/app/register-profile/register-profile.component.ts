import { Component } from '@angular/core';
import { UserModel } from '../shared/models/UserModel';
import { UserService } from '../services/business/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-profile',
  templateUrl: './register-profile.component.html',
  styleUrls: ['./register-profile.component.css'],
})
export class RegisterProfileComponent {
  user = new UserModel({ firstName: '', lastName: '', phone: '', email: '' });
  private userId = localStorage.getItem('userId') as unknown as number;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {}

  onSubmit() {
    this.userService.register(this.userId, this.user).subscribe(
      (response) => {
        console.log('User registered successfully', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error registering user', error);
      }
    );
  }
  }