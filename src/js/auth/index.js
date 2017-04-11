import angular from 'angular';

// module for our functionality
let authModule = angular.module('app.auth', []);


// include ui router
import AuthConfig from './auth.config';
authModule.config(AuthConfig);

// controllers
import AuthCtrl from './auth.controller';
authModule.controller('AuthCtrl', AuthCtrl);

export default authModule;