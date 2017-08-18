!function(angular) {
  'use strict';

  angular
    .module('appChat')
    .factory('auth', authFactory);

  authFactory.$inject = [];
  function authFactory() {
    var auth = {
      isLoggedIn: isLoggedIn,
    };

    function isLoggedIn() {
      return false;
    }

    return auth;
  }

}(window.angular);
