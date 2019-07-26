import { ITask } from '../../shared/interfaces';
import { ETaskActions, TaskActions } from './task.actions';
import { initialTaskState, IAppState } from './task.state';

export const taskReducers = (
  state = initialTaskState,
    action: TaskActions
): IAppState => {
  switch (action.type) {
    case ETaskActions.MoveTask:
      break;
    case ETaskActions.AddTask: {
      let newItem: ITask = {
        id: state.boards['Todo'].length + 1,
        header: `${action.payload}`,
      };
      return {
        ...state,
         boards: {
          ...state.boards,
          'Todo': [...state.boards['Todo'], newItem]
        }
      };
    }
    case ETaskActions.DeleteTask: {
      const {boardType, taskId} = action.payload;
      return {
        ...state,
        boards: {
          ...state.boards,
          [boardType]: state.boards[boardType].filter(el => el.id !== taskId)
        }
      };
    }

    case ETaskActions.EditTask: {

      let editableElementIndex = state.boards[action.payload.boardType].findIndex(el => el.id === action.payload.item.id);
      let editableElement: ITask = state.boards[action.payload.boardType].find(el => el.id === action.payload.item.id);
      editableElement.header = action.payload.item.header;
      return {
        ...state,
        boards: {
          ...state.boards,
          [action.payload.boardType]: [...state.boards[action.payload.boardType].slice(0, editableElementIndex), editableElement, ...state.boards[action.payload.boardType].slice(editableElementIndex + 1)]
        }
      }
    }
    default: {
      return state;
    }
  }
};
