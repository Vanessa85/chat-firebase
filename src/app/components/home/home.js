!function(angular) {
  'use strict';

  var homeComponent = {
    templateUrl: '/app/components/home/home.html',
    controller: homeCtrl
  };

  homeCtrl.$inject = [];
  function homeCtrl() {

  }

  angular
    .module('appChat')
    .component('home', homeComponent);

}(window.angular);
