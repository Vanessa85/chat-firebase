!function(angular, notie) {
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
        showMessage('Welcome!, you are logged in', 'success');
        $state.go('home');
      }).catch(function(err) {
          showMessage(err.message, 'error');
      });
    }

    function loginTW() {
      firebaseApp.authTW().then(function() {
        showMessage('Welcome! you are logged in', 'success');
        $state.go('home');
      }).catch(function(err) {
        showMessage(err.message, 'error');
      });
    }

    function showMessage(message, type) {
      notie.alert({ text: message, type: type });
    }

  }

  angular
    .module('appChat')
    .component('login', loginComponent);

}(window.angular, window.notie);
