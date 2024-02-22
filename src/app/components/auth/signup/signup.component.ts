import { Component, OnInit } from '@angular/core';
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

  constructor(){

  }

  ngOnInit(): void {

  }

  handleSaveUser(){
    console.log(this.user)
  }


}
