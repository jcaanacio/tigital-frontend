import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from '../shared/models/UserModel';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../helpers/validateform';

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

  ngOnInit(): void {
    this.registerProfileForm = this.fb.group ({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required]
    })
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
