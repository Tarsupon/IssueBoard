import { IBoard, ITask } from '../../shared/interfaces';

export interface IAppState {
  boards: {
    [boardName: string]: ITask[];
  }
}

export const initialTaskState: IAppState = {
  boards: {
    'Todo': [
      {
        id: 1,
        header: 'TODO'
      },
    ],
    'InProgress': [
      {
        id: 1,
        header: 'InPROGREEs'
      }
    ],
    'Done': [
      {
        id: 1,
        header: 'DONe!!!'
      }
    ]
  }
};

