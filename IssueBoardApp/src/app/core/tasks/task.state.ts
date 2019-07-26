import { ITask } from '../../shared/interfaces';

export interface ITaskState {
  todoList: ITask[];
  inProgressList: ITask[];
  doneList: ITask[];
}

export const initialTaskState: ITaskState = {
  todoList: [ {
    id: 1,
    header: 'Kuliti',
    isTodo: true,
    isInProgress: false,
    isDone: false,
  }],
  inProgressList: [ {
    id: 12,
    header: 'InProgress',
    isTodo: false,
    isInProgress: true,
    isDone: false,
  }],
  doneList: [ {
    id: 1,
    header: 'Done',
    isTodo: false,
    isInProgress: false,
    isDone: true,
  }],
};

