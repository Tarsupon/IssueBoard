import { IAppState } from '../../core/tasks';
import { ITask } from './ITask';

export interface IEditTaskType {
  boardType: string;
  item: ITask;
  newHeader: string;
  appState: IAppState;
}
