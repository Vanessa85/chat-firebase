!function(angular) {
  'use strict';
  var loginComponent = {
    templateUrl: 'app/components/login/login.html',
    controller: LoginCtrl
  };

  LoginCtrl.$inject = ['$state', 'firebaseApp'];
  function LoginCtrl($state, firebaseApp) {
    var vm = this;
    vm.loginFB = loginFB;
    vm.loginTW = loginTW;

    //////////

    function loginFB() {
      firebaseApp.authFB().then(function() {
        $state.go('home');
      }).catch(function(err) {
        console.log('weeor', err);
      });
    }

    function loginTW() {
      $state.go('home');
    }

  }

  angular
    .module('appChat')
    .component('login', loginComponent);

}(window.angular);
