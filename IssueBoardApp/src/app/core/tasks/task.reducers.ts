import { ITask } from '../../shared/interfaces';
import { ETaskActions, TaskActions } from './task.actions';
import { initialTaskState, ITaskState } from './task.state';

export const taskReducers = (
  state = initialTaskState,
    action: TaskActions
): ITaskState => {
  switch (action.type) {
    case ETaskActions.AddTask: {
      let newItem: ITask = {
        id: state.todoList.length + 1,
        header: `${action.payload}`,
        isDone: false,
        isInProgress: false,
        isTodo: true,
      };
      return {
        ...state,
        todoList: [...state.todoList, newItem],
      };
    }
    case ETaskActions.DeleteTask: {
      if (action.payload.isTodo) return {
        ...state,
        todoList: state.todoList.filter(el => el.id !== action.payload.id)
      };
      if (action.payload.isInProgress) return {
        ...state,
        inProgressList: state.inProgressList.filter(el => el.id !== action.payload.id)
      };
      if (action.payload.isDone) return {
        ...state,
        doneList: [...state.doneList].filter(el => el.id !== action.payload.id)
      };
    }

    case ETaskActions.EditTask: {
      if (action.payload.isTodo) {
        let editableElementIndex = state.todoList.findIndex(el => el.id === action.payload.id);
        const updatedElement: ITask = state.todoList[editableElementIndex] = action.payload;
        return {
          ...state,
          todoList: [...state.todoList.slice(0, editableElementIndex), updatedElement, ...state.todoList.slice(editableElementIndex + 1)]
        }
      }

      if (action.payload.isInProgress) {
        let editableElementIndex = state.inProgressList.findIndex(el => el.id === action.payload.id);
        const updatedElement: ITask = state.inProgressList[editableElementIndex] = action.payload;
        return {
          ...state,
          inProgressList: [...state.inProgressList.slice(0, editableElementIndex), updatedElement, ...state.inProgressList.slice(editableElementIndex + 1)]
        }
      }
    }
    default: {
      return state;
    }
  }
};
