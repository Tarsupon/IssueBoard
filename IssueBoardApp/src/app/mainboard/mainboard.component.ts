import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { TasksFacade } from '../core/tasks';
import { ITask } from '../shared/interfaces';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-mainboard',
  templateUrl: './mainboard.component.html',
  styleUrls: ['./mainboard.component.scss'],
})
export class MainboardComponent {

  todoTasks$: Observable<ITask[]>;
  inProgressTasks$: Observable<ITask[]>;
  doneTasks$: Observable<ITask[]>;

  authUser = localStorage.getItem('username');

  constructor(public tasksFacade: TasksFacade) {
    this.tasksFacade.getAllTasks();
    this.todoTasks$ = this.tasksFacade.todoTasks$;
    this.inProgressTasks$ = this.tasksFacade.inProgressTasks$;
    this.doneTasks$ = this.tasksFacade.doneTasks$;
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
}
