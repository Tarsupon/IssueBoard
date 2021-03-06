// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  GET_FROM_FAKE_SERVER: 'http://localhost:3000/response',
  GET_USERS_FROM_FAKE_SERVER: 'http://localhost:3001/users',

  API_URL_ABOUT_PARTIAL: 'https://www.googleapis.com/drive/v3/about?fields=storageQuota',
  API_URL_FILES_LIST: 'https://www.googleapis.com/drive/v3/files',
  API_URL_FILES_UPLOAD_SIMPLE: 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart',
  API_URL_FILES_UPLOAD_MULTIPLE: 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart',
  API_URL_FOLDER_CREATE: 'https://www.googleapis.com/drive/v3/files',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
