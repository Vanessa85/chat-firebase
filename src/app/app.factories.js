!function(angular, notie) {
  'use strict';

  angular
    .module('appChat')
    .factory('notie', notieFactory);

  function notieFactory() {
    var service = {
      success: success,
      error: error
    };

    return service;

    function success(message) {
      notie.alert({ text: message, type: 'success' });
    }

    function error(message) {
      notie.alert({ text: message, type: 'error' });
    }
  }

}(window.angular, window.notie);
