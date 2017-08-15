(function(angular) {
  'use strict';

  angular
    .module('appChat', ['ui.router'])
    .config(config);

  config.$inject = ['$stateProvider'];
  function config($stateProvider) {
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
  }

})(window.angular);
