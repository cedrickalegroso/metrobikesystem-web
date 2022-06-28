// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  useEmulators: true,
  firebase: {
    databaseURL: 'https://metrobike-ec82b.firebaseio.com',
    projectId: 'metrobike-ec82b',
    appId: '1:346605474551:web:9d6ac8da6a54b98205b9f2',
    storageBucket: 'metrobike-ec82b.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyCGcayd-YHWtei1uP1_78JA5xGTZYLKJvs',
    authDomain: 'metrobike-ec82b.firebaseapp.com',
    messagingSenderId: '346605474551',
    measurementId: 'G-X8RZY602PW',
    experimentalForceLongPolling: true,
    merge: true
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
