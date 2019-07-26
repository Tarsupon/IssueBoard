import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITaskState } from './task.state';

export const getState = createFeatureSelector<ITaskState>('task');

export const selectTodoTasks = createSelector(
  getState,
  (state: ITaskState) => state.todoList
);

export const selectInProgressTasks = createSelector(
  getState,
  (state: ITaskState) => state.inProgressList
);

export const selectDoneTasks = createSelector(
  getState,
  (state: ITaskState) => state.doneList
);
