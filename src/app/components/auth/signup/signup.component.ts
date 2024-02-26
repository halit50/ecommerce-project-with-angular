import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };

  signupForm: FormGroup;
  firstname: FormControl;
  lastname: FormControl;
  email: FormControl;
  password: FormControl;

  constructor(private fb: FormBuilder){
    this.firstname = fb.control("", [Validators.required, Validators.minLength(2)])
    this.lastname = fb.control("", [Validators.required, Validators.minLength(2)])
    this.email = fb.control("", [Validators.email, Validators.required])
    this.password = fb.control("", [Validators.required, Validators.minLength(6)])

    this.signupForm = fb.group({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password
    })
  }

  ngOnInit(): void {

  }

  handleSaveUser(){
    console.log(this.signupForm.value)
  }


}
