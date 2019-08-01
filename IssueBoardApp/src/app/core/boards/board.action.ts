import { Action } from '@ngrx/store';
import { IAddBoardType } from '../../shared/interfaces/IAddBoardType';
import { AddTask } from '../tasks';

export enum EBoardsActions{
  AddBoard = '[Board] Add ',
  DeleteBoard = '[Board] Delete',
}
export class AddBoard implements Action {
  public readonly type = EBoardsActions.AddBoard;
  payload: IAddBoardType;

  constructor(payload: IAddBoardType) {
    this.payload = payload;
  }
}

export class DeleteBoard implements Action {
  public readonly type = EBoardsActions.DeleteBoard;
  payload: IAddBoardType;

  constructor(payload: IAddBoardType) {
    this.payload = payload;
  }
}

export type BoardAction = AddBoard | DeleteBoard;
