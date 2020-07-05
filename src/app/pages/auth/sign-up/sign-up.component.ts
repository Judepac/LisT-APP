import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  auth = new User();

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.auth);
  }
  back() {
    this.router.navigate(['/auth']);
  }

}
