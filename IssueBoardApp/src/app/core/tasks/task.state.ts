import { IBoard, ITask } from '../../shared/interfaces';

export interface IAppState {
  boards: {
    [boardName: string]: ITask[];
  }
}

export const initialTaskState: IAppState = { boards: {} };

