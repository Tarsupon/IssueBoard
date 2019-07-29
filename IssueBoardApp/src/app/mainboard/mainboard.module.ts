import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { AppModule } from '../app.module';
import { CoreModule } from '../core/core.module';
import { TaskEffects } from '../core/tasks/task.effects';
import { taskReducers } from '../core/tasks/task.reducers';
import { MainboardComponent } from '../mainboard/mainboard.component';
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
})
export class MainboardModule { }
