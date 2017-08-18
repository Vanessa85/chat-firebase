(function(angular) {
  'use strict';

  angular
    .module('appChat', ['ui.router'])
    .config(config)
    .run(run);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];
  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state({
        name: 'home',
        url: '/',
        template: '<h1>Hello World</h1>'
      })
      .state({
        name: 'login',
        url: '/login',
        component: 'login'
      });

      $urlRouterProvider.otherwise('/');
  }

  run.$inject = ['$transitions'];
  function run($transitions) {
    $transitions.onStart({ to: 'home'}, function(trans) {
      var auth = trans.injector().get('auth');
      if (!auth.isLoggedIn()) {
        return trans.router.stateService.target('login');
      }
    });
  }

})(window.angular);
