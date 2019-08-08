
import { ITask } from '../../shared/interfaces';
import { IAppState, initialTaskState } from '../tasks';
import { EFilesActions, FileAction } from './file.action';

export const fileReducers = (
  state = initialTaskState,
  action: FileAction
): IAppState => {
  switch (action.type) {

    case EFilesActions.AddFile: {

      let editableElementIndex = action.payload.appState.boards[action.payload.boardType].findIndex(el => el.id === action.payload.task.id);
      let editableElement: ITask = action.payload.appState.boards[action.payload.boardType].find(el => el.id === action.payload.task.id);

      editableElement.files.push(action.payload.file.name);

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
