import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '../core';
import { SharedModule } from '../shared';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  providers: []
})
export class LoginModule { }
