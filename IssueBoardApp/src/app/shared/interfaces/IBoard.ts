import { ITask } from './ITask';

export interface IBoard {
  boardId: number;
  boardName: string;
  boardTasks: ITask[];
}
