import { state } from '@angular/animations';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITask } from '../../shared/interfaces';
import { IAppState } from './task.state';

export const getState = createFeatureSelector<IAppState>('task');

export const selectTasks = createSelector(
  getState,
  // (state: IAppState,
  //  props: {boardType: string}) => state.boards[props.boardType]
  (state: IAppState) => state.boards
);


