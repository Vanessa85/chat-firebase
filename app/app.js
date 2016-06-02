(function() {
  'use strict';

  angular
    .module('appChat', ['ngRoute'])
    .config(config);

  config.$inject = ['$routeProvider'];
  function config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/home.html',
        controller: 'HomeController as vm'
      });
  }

})();