import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from './task.state';

export const getState = createFeatureSelector<IAppState>('task');

export const selectTasks = createSelector(
  getState,
  (state: IAppState) => state.boards
);


