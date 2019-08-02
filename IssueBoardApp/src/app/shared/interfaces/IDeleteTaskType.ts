import { IAppState } from '../../core/tasks';

export interface IDeleteTaskType {
  boardType: string;
  taskId: number;
  appState: IAppState;
}
