import { IAppState, initialTaskState } from '../tasks';
import { BoardAction, EBoardsActions } from './board.action';

export const boardReducers = (
  state = initialTaskState,
  action: BoardAction
): IAppState => {
  switch (action.type) {

    case EBoardsActions.AddBoard: {
      return {
        boards: {...action.payload.appState.boards, [action.payload.boardType]:[]}
      };
    }

    case EBoardsActions.DeleteBoard: {
      delete action.payload.appState.boards[action.payload.boardType];
      return {
        boards: {...action.payload.appState.boards }
      }
    }
    default: {
      return state;
    }
  }
};
