import { SignUpService } from './../../../shared/services/sign-up.service';
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

  constructor(private router: Router, private service: SignUpService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.service.createNewUser(this.auth).subscribe( data => {
      console.log(data);
    });
  }
  back() {
    this.router.navigate(['/auth']);
  }

}
