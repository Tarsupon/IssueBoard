import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../tasks';

export const getBState = createFeatureSelector<IAppState>('board');

export const selectAll = createSelector(
  getBState,
  (state: IAppState) => state.boards
);
