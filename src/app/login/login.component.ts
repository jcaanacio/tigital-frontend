<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../helpers/validateform';
=======
import { Component } from '@angular/core';
import { AuthService } from '../services/business/auth.service';
>>>>>>> 62999c85a26579a45ba0adcb118edba9b5d289d2

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['', Validators.required]
    })
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSubmit() {
<<<<<<< HEAD
    if(this.loginForm.valid) {

      console.log(this.loginForm.value)

      // Send the obj to the database

    } else {

      // throw the error using toaster and with required fields
      ValidateForm.validateAllFormFileds(this.loginForm);
      alert("Your form is invalid")

    }
=======
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Logged in successfully');
        // Handle successful login (e.g., navigate to another page)
        // After successful login
        console.log(response.token);
        localStorage.setItem('authToken', response.token);
        //To retrieve the token later:
        //const authToken = localStorage.getItem('authToken');
      },
      (error) => {
        console.error('Login failed', error);
        alert(error.message);
      }
    );
>>>>>>> 62999c85a26579a45ba0adcb118edba9b5d289d2
  }









  // username: string = '';
  // password: string = '';

  // constructor(private authService: AuthService) {}

  // onSubmit() {
  //   this.authService.login(this.username, this.password).subscribe(
  //     (response) => {
  //       console.log('Logged in successfully');
  //       // Handle successful login (e.g., navigate to another page)
  //       // After successful login
  //       console.log(response.token);
  //       localStorage.setItem('authToken', response.token);
  //       //To retrieve the token later:
  //       //const authToken = localStorage.getItem('authToken');
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
