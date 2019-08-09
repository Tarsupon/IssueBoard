import { IAppState } from '../../core/tasks';
import { ITask } from './ITask';

export interface IAddTimeType {
  appState: IAppState;
  boardType: string;
  time: string;
  task: ITask
}
