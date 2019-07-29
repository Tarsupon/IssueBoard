import { ITask } from './ITask';

export interface IEditTaskType {
  boardType: string;
  item: ITask;
  newHeader: string;
}
