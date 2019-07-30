import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { CoreModule } from '../core';
import { TaskEffects } from '../core/tasks';
import { taskReducers } from '../core/tasks';
import { TasksFacade } from '../core/tasks/task.facade';
import { MainboardComponent } from './mainboard.component';
import { MainboardRoutingModule } from './mainboard-routing.module';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [MainboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    MainboardRoutingModule,
    StoreModule.forRoot({ task: taskReducers }),
    EffectsModule.forRoot([TaskEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    TasksFacade
  ]
})
export class MainboardModule { }
