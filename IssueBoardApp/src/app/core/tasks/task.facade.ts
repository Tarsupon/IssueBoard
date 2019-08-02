import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ITask } from '../../shared/interfaces';
import { selectAll } from '../boards';
import { StartGetItems } from './task.actions';
import { selectTasks } from './task.selectors';
import { IAppState } from './task.state';

@Injectable()
export class TasksFacade{
  tasks:{[boardName: string]: ITask[]} = {};

  allTasks$ = this.store.pipe(
    select(selectTasks)
  );

  all$ = this.store.pipe(
    select(selectAll)
  );

  constructor(private store: Store<IAppState>) {
    this.all$.subscribe((tasks: {[boardName: string]: ITask[]}) => this.tasks = tasks)
  }

  getAllTasks() {
    this.store.dispatch(new StartGetItems());
  }
}
