import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { GoogleApiService } from 'ng-gapi';
import { GoogleService } from '../core/googleAuth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private file: File;
  private files: FileList;
  folderName: string;

  constructor(
    private translate: TranslateService,
    private _httpClient: HttpClient,
    private gapiService: GoogleApiService,
    private gdriveResource: GoogleService,
    private router: Router,
  ) {
    translate.addLangs(['en', 'ru']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.gapiService.onLoad().subscribe();
  }

  ngOnInit() {
    this.folderName = null;
  }

  userSignOut() {
    this.router.navigateByUrl('');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  selectFile(event) {
    console.log('selectFile..... ', event, '\nfile id..... ', event.target.files[0].id);
    this.file = event.target.files[0];
  }

  gdriveUploadFile() {
    this.gdriveResource.gapiDriveUploadFile(localStorage.getItem('access_token'), this.file);
  }

  gdriveAbout() {
    this.gdriveResource.gapiDriveAbout(localStorage.getItem('access_token'));
  }

  gdriveFileList() {
    this.gdriveResource.gapiDriveFileList(localStorage.getItem('access_token'));
  }

  gdriveCreateFolder() {
    this.gdriveResource.gapiDriveCreateFolder(localStorage.getItem('access_token'), this.folderName);
  }

  selectFiles(event) {
    console.log('selectFiles..... ', event, '\nfileList..... ', event.target.files);
    this.files = event.target.files;
  }

  gdriveUploadFiles() {
    this.gdriveResource.gapiDriveUploadFiles(localStorage.getItem('access_token'), this.files, localStorage.getItem('new_folderID'));
  }
}
