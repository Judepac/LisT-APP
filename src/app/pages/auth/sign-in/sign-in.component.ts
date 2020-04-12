import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  auth = new User();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.auth);
  }
}
