import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { GetFakeDataService } from '../get-fake-data.service';
import { ETaskActions } from './task.actions';
import { IAppState } from './task.state';

@Injectable()
export class TaskEffects {
  constructor(
    private actions$: Actions,
    private getDataService: GetFakeDataService
  ) {}

  @Effect()
  loadTasks$ = this.actions$.pipe(
    ofType(ETaskActions.StartGetItems),
    mergeMap(() =>
    this.getDataService.getData().pipe(
      map((response: IAppState) => {
        return {type: ETaskActions.LoadItems, payload: response}
      }),
      catchError(() => EMPTY)
    ))
  )

}


