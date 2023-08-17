<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from '../shared/models/UserModel';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../helpers/validateform';
=======
import { Component } from '@angular/core';
import { UserModel } from '../shared/models/UserModel';
import { UserService } from '../services/business/user.service';
>>>>>>> 62999c85a26579a45ba0adcb118edba9b5d289d2

@Component({
  selector: 'app-register-profile',
  templateUrl: './register-profile.component.html',
  styleUrls: ['./register-profile.component.css'],
})
export class RegisterProfileComponent implements OnInit {

  // type: string = "password";
  // isText: boolean = false;
  // eyeIcon: string = "fa-eye-slash";
  registerProfileForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

<<<<<<< HEAD
  ngOnInit(): void {
    this.registerProfileForm = this.fb.group ({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required]
    })
=======
  onSubmit() {
    // Call the service to register the user
>>>>>>> 62999c85a26579a45ba0adcb118edba9b5d289d2
  }

  onRegisterProfile() {
    if(this.registerProfileForm.valid) {
      // perform logic for signup

      console.log(this.registerProfileForm.value)
    } else {
      ValidateForm.validateAllFormFileds(this.registerProfileForm)
      // logic for throwing error
      alert("Your form is invalid")
    }
  }

  



  // user = new UserModel({ firstName: '', lastName: '', phone: '', email: '' });

  // constructor(private userService: UserService) {}

  // onSubmit() {
  //   // Call the service to register the user
  //   this.userService.register(this.user).subscribe(
  //     (response) => {
  //       console.log('User registered successfully', response);
  //     },
  //     (error) => {
  //       console.error('Error registering user', error);
  //     }
  //   );
  // }
}
