// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoint: {
    auth: 'http://localhost:8882/auth-service/v1/login',
    logout: 'http://localhost:8882/auth-service/v1/logout',
    register: 'http://localhost:8882/auth-service/v1/register',
    groups: 'http://localhost:8882/auth-service/v1/groups',
    users: 'http://localhost:8882/admin/v1/users',
    roles: 'http://localhost:8882/auth-service/v1/roles',
    postulations: 'http://localhost:8882/scholarship/v1/postulations',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
