!function(angular) {
  'use strict';

  headerComponent.$inject = [];
  function headerComponent() {
    return {
      restrict: 'E',
      templateUrl: '/app/components/header/header.html',
      replace: true,
      // scope: {},
      // bindToController: true,
      controllerAs: 'ctrl',
      controller: ['$state', 'firebaseApp', function($state, firebaseApp) {
        var vm = this;
        vm.logout = logout;
        vm.isLoggedIn = isLoggedIn;

        //////////

        function logout() {
          firebaseApp.signOut().then(function() {
            $state.go('login');
          });
        }

        function isLoggedIn() {
          return firebaseApp.isAuthenticate();
        }

      }]
    };
  }

  angular
    .module('appChat')
    .directive('appHeader', headerComponent);

}(window.angular);
