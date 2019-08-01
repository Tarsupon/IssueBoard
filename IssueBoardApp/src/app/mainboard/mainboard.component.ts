import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { GetFakeDataService } from '../core';
import { AddBoard, DeleteBoard } from '../core/boards/board.action';
import { IAppState, TaskEffects, TasksFacade } from '../core/tasks';
import { ITask } from '../shared/interfaces';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-mainboard',
  templateUrl: './mainboard.component.html',
  styleUrls: ['./mainboard.component.scss'],
})
export class MainboardComponent implements OnInit{

  // todoTasks$: Observable<ITask[]>;
  // inProgressTasks$: Observable<ITask[]>;
  // doneTasks$: Observable<ITask[]>;
  tasks:{[boardName: string]: ITask[]} = {};
  authUser = localStorage.getItem('username');

  constructor(public tasksFacade: TasksFacade, private data: GetFakeDataService, private store: Store<IAppState>) {

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
    this.tasksFacade.getAllTasks();

    // this.todoTasks$ = this.tasksFacade.todoTasks$;
    // this.inProgressTasks$ = this.tasksFacade.inProgressTasks$;
    // this.doneTasks$ = this.tasksFacade.doneTasks$;

    this.tasksFacade.allTasks$.subscribe((tasks: {[boardName: string]: ITask[]}) => this.tasks = tasks);

    // this.all$.subscribe(tasks => console.log(tasks))
  }

  createBoard(value: string) {
    this.store.dispatch(new AddBoard({appState: {boards: this.tasks}, boardType: value}));
    this.tasksFacade.all$.subscribe((tasks: {[boardName: string]: ITask[]}) => this.tasks = tasks);

  }

  deleteBoard(key: string) {
   this.store.dispatch(new DeleteBoard({boardType: key, appState: {boards: this.tasks}}));
  }
}
