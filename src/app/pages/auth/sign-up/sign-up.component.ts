import { SignUpService } from './../../../shared/services/sign-up.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SignUpModalComponent } from '../../../components/modals/sign-up-modal/sign-up-modal.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  auth = new User();
  bsModalRef: BsModalRef;
  config = {
    class: 'modal-dialog-centered'
  };

  constructor(private router: Router,
              private service: SignUpService,
              private modalService: BsModalService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.service.createNewUser(this.auth).subscribe( data => {
      if (data === 'Inscription validée') {
        const initialState = {message: data};
        this.bsModalRef = this.modalService.show( SignUpModalComponent , {initialState, class: 'modal-dialog-centered modal-lg'});
        setTimeout(() => {
          this.bsModalRef.hide();
          this.bsModalRef.content.onHidden();
        }, 3000);
      }
      console.log(data);
    });
  }
  back() {
    this.router.navigate(['/auth']);
  }

}
