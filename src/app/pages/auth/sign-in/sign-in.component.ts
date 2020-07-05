import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user';
import { SignInService } from '../../../shared/services/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  auth = new User();

  constructor(private service: SignInService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.service.connection(this.auth).subscribe( () =>
      this.router.navigate(['/dashboard']));
  }
}
