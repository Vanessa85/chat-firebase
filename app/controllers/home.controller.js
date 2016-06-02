(function() {
  'use strict';

  angular
    .module('appChat')
    .controller('HomeController', HomeController);

  function HomeController() {
    var vm = this;
    vm.name = 'Milagros';
  }

})();
