import { IAppState } from '../../core/tasks';
import { ITask } from './ITask';

export interface IAddFileType {
  appState: IAppState;
  boardType: string;
  file: File;
  task: ITask;
}
