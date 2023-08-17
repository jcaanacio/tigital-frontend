<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../helpers/validateform';
=======
import { Component } from '@angular/core';
import { AuthService } from '../services/business/auth.service';
>>>>>>> 62999c85a26579a45ba0adcb118edba9b5d289d2

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

<<<<<<< HEAD
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  signUpForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
=======
  constructor(private authService: AuthService) {}

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
>>>>>>> 62999c85a26579a45ba0adcb118edba9b5d289d2
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSignUp() {
    if(this.signUpForm.valid) {
      // perform logic for signup

      console.log(this.signUpForm.value)

    } else {

      ValidateForm.validateAllFormFileds(this.signUpForm)
      // logic for throwing error
      alert("Your need to signup first")
      
    }
  }








  // username: string = '';
  // password: string = '';

  // constructor(private userService: UserService) {}

  // onSubmit() {
  //   this.userService.signUp(this.username, this.password).subscribe(
  //     (response) => {
  //       console.log({ response });
  //     },
  //     (error) => {
  //       console.error('Login failed', error);
  //       const {
  //         response: { data },
  //       } = error;

  //       alert(data.message);
  //     }
  //   );
  // }
}
