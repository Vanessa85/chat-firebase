(function(angular) {
  'use strict';

  angular
    .module('appChat', ['ui.router'])
    .config(config)
    .run(run);

  config.$inject = ['$stateProvider', '$urlRouterProvider', 'firebaseAppProvider'];
  function config($stateProvider, $urlRouterProvider, firebaseAppProvider) {
    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'home',
        resolve: {

        }
      })
      .state({
        name: 'login',
        url: '/login',
        component: 'login'
      });

      $urlRouterProvider.otherwise('/');

      firebaseAppProvider.setConfig({
        apiKey: "AIzaSyAbeli44uERTLMata4o8aUuVoag-Gs_E3E",
        authDomain: "chatangular-b9163.firebaseapp.com",
        databaseURL: "https://chatangular-b9163.firebaseio.com",
        projectId: "chatangular-b9163",
        storageBucket: "chatangular-b9163.appspot.com",
        messagingSenderId: "995895250626"
      });
  }

  run.$inject = ['$transitions', 'firebaseApp'];
  function run($transitions, firebaseApp) {
    $transitions.onStart({ to: 'home'}, function(trans) {
      return firebaseApp.authenticate().catch(function(/*err*/) {
        return trans.router.stateService.target('login');
      });
    });
  }

})(window.angular);
