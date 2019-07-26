import { createSelector } from '@ngrx/store';
import { ITask } from '../../shared/interfaces';
import { ITaskState } from './task.state';

export const selectTodoList = (state: ITaskState) => state.todoList;
export const selectInProgressList = (state: ITaskState) => state.inProgressList;
export const selectDoneList = (state: ITaskState) => state.doneList;

export const selectTodoTasks = createSelector(
  selectTodoList,
  (state: ITask[]) => state
);

export const selectInProgressTasks = createSelector(
  selectInProgressList,
  (state: ITask[]) => state
);

export const selectDoneTasks = createSelector(
  selectDoneList,
  (state: ITask[]) => state
);
