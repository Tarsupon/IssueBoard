import { Action } from '@ngrx/store';
import { ITask } from '../../shared/interfaces';
import { IDeleteTaskType } from '../../shared/interfaces/IDeleteTaskType';
import { IEditTaskType } from '../../shared/interfaces/IEditTaskType';
import { IAppState } from './task.state';

export enum ETaskActions {
  AddTask = '[Task] Add ',
  DeleteTask = '[Task] Delete ',
  EditTask = '[Task] Edit ',
  LoadItems = '[Task] Load ',
  StartGetItems = '[Task] Get'
}
export class AddTask implements Action {
  public readonly type = ETaskActions.AddTask;
  payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }
}

export class DeleteTask implements Action {
  public readonly type = ETaskActions.DeleteTask;
  payload: IDeleteTaskType;

  constructor(payload:  IDeleteTaskType) {
    this.payload = payload

  }
}

export class EditTask implements Action {
  public readonly type = ETaskActions.EditTask;
  payload: IEditTaskType;

  constructor(payload: IEditTaskType) {
    this.payload = payload;
  }
}

export class StartGetItems implements Action {
  readonly  type = ETaskActions.StartGetItems
}

export class LoadItems implements Action {
  public readonly type = ETaskActions.LoadItems;
  payload: IAppState;
  constructor(payload: IAppState) {
    this.payload = payload;
  }
}

export type TaskActions = AddTask | DeleteTask | EditTask | LoadItems | StartGetItems;
