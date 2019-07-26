import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { AddTask, DeleteTask, ETaskActions, TaskActions } from '../core/tasks/task.actions';
import { selectDoneTasks, selectInProgressTasks, selectTodoTasks } from '../core/tasks/task.selectors';
import { ITaskState } from '../core/tasks/task.state';
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

  constructor(private store: Store<ITaskState>) {
  }

  createTask(newTaskInput: string) {
   this.store.dispatch(new AddTask(newTaskInput));
  }

  deleteTask(item: ITask) {
    this.store.dispatch(new DeleteTask(item));
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
    this.todoTasks$ = this.store.select(selectTodoTasks);
    this.inProgressTasks$ = this.store.select(selectInProgressTasks);
    this.doneTasks$ = this.store.select(selectDoneTasks);
  }
}
