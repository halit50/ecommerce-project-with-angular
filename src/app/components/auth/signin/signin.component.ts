import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user: User = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  }

  constructor(){

  }

  ngOnInit(): void {

  }

  handleSubmit(){
    console.log(this.user)
  }
}
