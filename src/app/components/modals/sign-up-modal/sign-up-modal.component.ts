import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.scss']
})
export class SignUpModalComponent implements OnInit {
  message: string;

  constructor(public bsModalRef: BsModalRef, private router: Router, ) { }

ngOnInit() {
}

onHidden(): void {
  setTimeout(() => {
    this.bsModalRef.hide();
    this.router.navigate(['/auth']);
  }, 1000);
}
}
