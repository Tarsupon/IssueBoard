import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Action, props, select, Store } from '@ngrx/store';
import { AddTask, DeleteTask, EditTask, ETaskActions, TaskActions } from '../core/tasks/task.actions';
import { getState, selectTasks } from '../core/tasks/task.selectors';
import { IAppState } from '../core/tasks/task.state';
import { ITask } from '../shared/interfaces';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-mainboard',
  templateUrl: './mainboard.component.html',
  styleUrls: ['./mainboard.component.scss']
})
export class MainboardComponent implements OnInit {

  todoTasks$: Observable<ITask[]>;
  inProgressTasks$: Observable<ITask[]>;
  doneTasks$: Observable<ITask[]>;

  constructor(private store: Store<IAppState>) {
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

  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  ngOnInit() {
    this.todoTasks$ = this.store.pipe(
      select(selectTasks,{boardType: 'Todo'})
    );
    this.inProgressTasks$ = this.store.pipe(
      select(selectTasks,{boardType: 'InProgress'})
    );
    this.doneTasks$ = this.store.pipe(
      select(selectTasks, {boardType: 'Done'})
    );
  }
}
