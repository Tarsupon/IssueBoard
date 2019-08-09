import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '../core';
import { SharedModule } from '../shared';
import { HeaderComponent } from './header.component';
import { CsvModule } from '@ctrl/ngx-csv';

@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    TranslateModule,
    MatMenuModule,
    CsvModule,
  ],
})
export class HeaderModule { }
