import { ITask } from '../../shared/interfaces';
import { IAppState, initialTaskState } from '../tasks';
import { ETimesActions, TimeAction } from './time.action';

export const timeReducers = (
  state = initialTaskState,
  action: TimeAction
): IAppState => {
  switch (action.type) {

    case ETimesActions.AddTime: {

      let editableElementIndex = action.payload.appState.boards[action.payload.boardType].findIndex(el => el.id === action.payload.task.id);
      let editableElement: ITask = action.payload.appState.boards[action.payload.boardType].find(el => el.id === action.payload.task.id);

      editableElement.time = action.payload.time;

      return {
        ...state,
        boards: {
          ...action.payload.appState.boards,
          [action.payload.boardType]: [...action.payload.appState.boards[action.payload.boardType].slice(0, editableElementIndex), editableElement, ...action.payload.appState.boards[action.payload.boardType].slice(editableElementIndex + 1)]
        }
      }
    }
    default: {
      return state;
    }
  }
};
