import { Action } from '@ngrx/store';
import { IAddFileType } from '../../shared/interfaces/IAddFileType';

export enum EFilesActions{
  AddFile = '[File] Add ',
}
export class AddFile implements Action {
  public readonly type = EFilesActions.AddFile;
  payload: IAddFileType;

  constructor(payload: IAddFileType) {
    this.payload = payload;
  }
}

export type FileAction = AddFile;
