import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '../../environments/environment';
import { CoreModule } from '../core';
import { boardReducers } from '../core/boards/board.reducers';
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
    StoreModule.forRoot({ task: taskReducers, board: boardReducers }),
    EffectsModule.forRoot([TaskEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    TranslateModule,
  ],
  providers: [
    TasksFacade,
  ]
})
export class MainboardModule { }
