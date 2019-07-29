import { ITask } from '../../shared/interfaces';
import { ETaskActions, TaskActions } from './task.actions';
import { initialTaskState, IAppState } from './task.state';

export const taskReducers = (
  state = initialTaskState,
    action: TaskActions
): IAppState => {
  switch (action.type) {

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

      const {boardType, item, newHeader} = action.payload;

      let editableElementIndex = state.boards[boardType].findIndex(el => el.id === item.id);
      let editableElement: ITask = state.boards[boardType].find(el => el.id === item.id);
      editableElement.header = newHeader;
      return {
        ...state,
        boards: {
          ...state.boards,
          [boardType]: [...state.boards[boardType].slice(0, editableElementIndex), editableElement, ...state.boards[boardType].slice(editableElementIndex + 1)]
        }
      }
    }
    case ETaskActions.LoadItems: {
      return {
        ...state,
        boards: action.payload.boards
      }
    }
    default: {
      return state;
    }
  }
};
