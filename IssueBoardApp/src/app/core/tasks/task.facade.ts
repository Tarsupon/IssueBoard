import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITask } from '../../shared/interfaces';
import { selectAll } from '../boards/board.selectors';
import { AddTask, DeleteTask, EditTask, LoadItems, StartGetItems } from './task.actions';
import { selectTasks } from './task.selectors';
import { IAppState } from './task.state';

@Injectable()
export class TasksFacade{


  // todoTasks$ = this.store.pipe(
  //   select(selectTasks,{boardType: 'Todo'})
  // );
  // inProgressTasks$ = this.store.pipe(
  //   select(selectTasks,{boardType: 'InProgress'})
  // );
  // doneTasks$ = this.store.pipe(
  //   select(selectTasks, {boardType: 'Done'})
  // );
  allTasks$ = this.store.pipe(
    select(selectTasks)
  );

  all$ = this.store.pipe(
    select(selectAll)
  );

  constructor(private store: Store<IAppState>) {}

  getAllTasks() {
    this.store.dispatch(new StartGetItems());
  }

  createTask(newTaskInput: string) {
    this.store.dispatch(new AddTask(newTaskInput));
  }

  deleteTask(taskId: number, boardType: string) {
    this.store.dispatch(new DeleteTask({boardType, taskId}));
  }

  saveEditableTask(boardType: string, item: ITask, newHeader: string) {
    this.store.dispatch(new EditTask({boardType, item, newHeader}))
  }
}
