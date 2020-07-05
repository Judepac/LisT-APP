import { User } from './../../shared/models/user';
import { Component, OnInit } from '@angular/core';
import { SignInService } from '../../shared/services/sign-in.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: User;

  constructor(private service: SignInService) { }

  ngOnInit() {
    this.user = this.service.user;
  }
}
