!function(angular) {
  'use strict';
  var loginComponent = {
    templateUrl: '/app/components/login/login.html',
    controller: LoginCtrl
  };

  LoginCtrl.$inject = ['$state', 'firebaseApp', 'notie'];
  function LoginCtrl($state, firebaseApp, notie) {
    var vm = this;
    vm.loginFB = loginFB;
    vm.loginTW = loginTW;

    //////////

    function loginFB() {
      firebaseApp.authFB().then(function(result) {
        console.log(result); //eslint-disable-line
        notie.success('Welcome! you are logged in');
        $state.go('home');
      }).catch(function(err) {
        notie.error(err.message);
      });
    }

    function loginTW() {
      firebaseApp.authTW().then(function() {
        notie.success('Welcome! you are logged in');
        $state.go('home');
      }).catch(function(err) {
        notie.error(err.message);
      });
    }

  }

  angular
    .module('appChat')
    .component('login', loginComponent);

}(window.angular);
