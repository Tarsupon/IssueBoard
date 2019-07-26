import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { taskReducers } from '../core/tasks/task.reducers';
import { MainboardComponent } from '../mainboard/mainboard.component';
import { MainboardRoutingModule } from './mainboard-routing.module';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [MainboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    MainboardRoutingModule,
    StoreModule.forRoot({ task: taskReducers })
  ],
})
export class MainboardModule { }
