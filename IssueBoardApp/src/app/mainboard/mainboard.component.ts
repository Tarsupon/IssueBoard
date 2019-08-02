import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddBoard, DeleteBoard } from '../core/boards';
import { AddTask, DeleteTask, EditTask, IAppState, TasksFacade } from '../core/tasks';
import { ITask } from '../shared/interfaces';

@Component({
  selector: 'app-mainboard',
  templateUrl: './mainboard.component.html',
  styleUrls: ['./mainboard.component.scss'],
})
export class MainboardComponent implements OnInit{

  tasks:{[boardName: string]: ITask[]} = {};
  authUser = localStorage.getItem('username');

  constructor(public tasksFacade: TasksFacade,
             private store: Store<IAppState>) {

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

  createTask(newTaskInput: string) {
    this.store.dispatch(new AddTask({
      header: newTaskInput,
      appState: { boards: this.tasks}
    }));
  }

  deleteTask(taskId: number, boardType: string) {
    this.store.dispatch(new DeleteTask({
      boardType: boardType,
      taskId: taskId,
      appState: { boards: this.tasks}
    }));
  }

  saveEditableTask(boardType: string, item: ITask, newHeader: string) {
    this.store.dispatch(new EditTask({
      boardType: boardType,
      item: item,
      newHeader: newHeader,
      appState: { boards: this.tasks}
    }))
  }

  ngOnInit() {
    this.tasksFacade.getAllTasks();
    this.tasksFacade.allTasks$.subscribe((tasks: {[boardName: string]: ITask[]}) => this.tasks = tasks);
  }

  createBoard(value: string) {
    this.store.dispatch(new AddBoard({appState: {boards: this.tasks}, boardType: value}));
    this.tasksFacade.all$.subscribe((tasks: {[boardName: string]: ITask[]}) => this.tasks = tasks);

  }

  deleteBoard(key: string) {
   this.store.dispatch(new DeleteBoard({boardType: key, appState: {boards: this.tasks}}));
    this.tasksFacade.all$.subscribe((tasks: {[boardName: string]: ITask[]}) => this.tasks = tasks);
  }
}
