import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { GoogleAuthService } from 'ng-gapi';
import { environment } from '../../environments/environment';

@Injectable()
export class GoogleService {

  constructor(
    private googleAuth: GoogleAuthService,
    private ngZone: NgZone,
    private _httpClient: HttpClient
  ) {}

  signIn() {
    this.googleAuth.getAuth().subscribe((auth) => {
      auth.signIn()
        .then(result => {
          this.ngZone.run(() => {
            console.log('gapiAuthService_ngZone..... ', result);
            console.log('gapiAuthService_accessToken (ngZone.run())..... ', result.getAuthResponse().access_token,
              '\ngapiAuthService_idToken (ngZone.run())..... ', result.getAuthResponse().id_token);
            localStorage.setItem('access_token', result.getAuthResponse().access_token);
          });
        });
    });
    return true;
  }


  signOut() {
    this.googleAuth.getAuth().subscribe((auth) => {
      auth.signOut().then(result => {
        console.log('gapiAuthService_signOut()..... ', result);
        localStorage.clear();
      });
    });
  }


  gapiDriveAbout(accessToken: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    this._httpClient.get(environment.API_URL_ABOUT_PARTIAL, {
      headers: headers
    }).subscribe(res => {
      console.log('gapiDriverAbout_PARTIAL..... ', res);
    });
  }


  gapiDriveFileList(accessToken: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    this._httpClient.get(environment.API_URL_FILES_LIST, {
      headers: headers
    }).subscribe(res => {
      console.log('gapiDriverFileList_Files..... ', res);
    });
  }


  gapiDriveUploadFile(accessToken: string, file: File) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    const payload = new FormData();
    payload.append('myFile', file, file.name);

    const data = new FormData();
    const fileMetaData = {
      name: file.name,
      parents: ['1eiB2drudQbhiyUvLQRNWoohE-OVLpa91']
      // ^upload the file into a folder (by specifying folderID). If not specify, it will be uploaded to My Drive (default)
    };


    // >> When sending data to a web server, the data has to be a string. https://www.w3schools.com/js/js_json_stringify.asp
    data.append('fileMetaData', new Blob([JSON.stringify(fileMetaData)], {type: 'application/json'}));

    data.append('file', file);

    this._httpClient.post(environment.API_URL_FILES_UPLOAD_SIMPLE, data,
      {
        headers: headers,
        reportProgress: true,
        observe: 'events'
      }).subscribe(res => {
      console.log('gapiDriveFile_Create..... ', res);
    });

  }


  gapiDriveCreateFolder(accessToken: string, name: string) {

    const fileMetaData = {
      name: name,
      mimeType: 'application/vnd.google-apps.folder'
    };

    this._httpClient.post(environment.API_URL_FOLDER_CREATE, fileMetaData, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${accessToken}`).append('Content-Type', 'application/json'),
      reportProgress: true,
      observe: 'response'
    }).subscribe((res: HttpResponse<any>) => {
      console.log('gapiDriveFile_CreateFolder full-response..... ', res, '\ngapiDriveFile_CreateFolder folderID..... ', res.body.id);
      localStorage.setItem('new_folderID', res.body.id);
    });
  }


  gapiDriveUploadFiles(accessToken: string, files: FileList, folderID: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);

    const fileMetaData: { name: string, parents: string[] } = {
      name: null,
      parents: [folderID]
    };
    const data = new FormData();

    Object.keys(files).map(key => {
      console.log('gapiDriveUploadFiles_files key..... ', key);

      fileMetaData.name = files[key].name;

      console.log('gapiDriveUploadFiles_files fileMetaData..... ', fileMetaData);

      data.set(`fileMetaData`, new Blob([JSON.stringify(fileMetaData)], {type: 'application/json'}));
      data.set(`file`, files[key]);

      this._httpClient.post(environment.API_URL_FILES_UPLOAD_MULTIPLE, data, {
        headers: headers,
        reportProgress: true,
        observe: 'response'
      }).subscribe((res) => {
        console.log('gapiDriveUploadFiles full-response..... ', res);
      });
    });
  }
}
