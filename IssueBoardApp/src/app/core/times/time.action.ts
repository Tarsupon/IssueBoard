import { Action } from '@ngrx/store';
import { IAddTimeType } from '../../shared/interfaces/IAddTimeType';

export enum ETimesActions{
  AddTime = '[Time] Add ',
}
export class AddTime implements Action {
  public readonly type = ETimesActions.AddTime;
  payload: IAddTimeType;

  constructor(payload: IAddTimeType) {
    this.payload = payload;
  }
}

export type TimeAction = AddTime;
