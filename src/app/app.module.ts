import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SignUpModalComponent } from './components/modals/sign-up-modal/sign-up-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    SignUpModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SignUpModalComponent
  ]
})
export class AppModule { }
