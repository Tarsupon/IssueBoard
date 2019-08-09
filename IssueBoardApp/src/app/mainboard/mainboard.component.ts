import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GoogleService } from '../core';
import { AddBoard, DeleteBoard } from '../core/boards';
import { ExcelService } from '../core/excel.service';
import { AddFile } from '../core/files/file.action';
import { AddTask, DeleteTask, EditTask, IAppState, TasksFacade } from '../core/tasks';
import { AddTime } from '../core/times/time.action';
import { ITask } from '../shared/interfaces';
import { ICsvTask } from '../shared/interfaces/ICsvTask';

@Component({
  selector: 'app-mainboard',
  templateUrl: './mainboard.component.html',
  styleUrls: ['./mainboard.component.scss'],
})
export class MainboardComponent implements OnInit{

  tasks:{[boardName: string]: ITask[]} = {};
  private file: File;
  authUser = localStorage.getItem('username');

  constructor(public tasksFacade: TasksFacade,
             private store: Store<IAppState>,
              private gdriveResource: GoogleService,
              private excel: ExcelService) {
  }
  selectFile(event, boardType: string, item: ITask) {
    console.log('selectFile..... ', event, '\nfile id..... ', event.target.files[0].id);
    this.file = event.target.files[0];
    this.store.dispatch(new AddFile({
      boardType: boardType,
      task: item,
      file: event.target.files[0],
      appState: { boards: this.tasks}
    }));
    this.gdriveResource.gapiDriveUploadFile(localStorage.getItem('access_token'), this.file);
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

  changeTime(item: ITask, boardType: string, time: string) {
    this.store.dispatch(new AddTime({boardType: boardType, task: item, time: time, appState: {boards: this.tasks}}))
  }

  getData() {
    let arr: ICsvTask[] = [];

    Object.keys(this.tasks).forEach(key => {
      this.tasks[key].forEach(task => {
        let obj: ICsvTask = {boardType: key, id: task.id, time: task.time, files: task.files, header: task.header };
        arr.push(obj);
      })
    });

    return arr;
  }

  downloadExcel() {
    this.excel.exportAsExcelFile(this.getData(), 'data');
  }
}
