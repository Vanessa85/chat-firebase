!function(angular) {
  'use strict';

  var homeComponent = {
    templateUrl: '/app/components/home/home.html',
    controller: homeCtrl
  };

  homeCtrl.$inject = ['firebaseApp'];
  function homeCtrl(firebaseApp) {
    var vm = this;

    vm.$onInit = onInit;

    //////////

    function onInit() {
      vm.user = firebaseApp.getUser();
      vm.imgUser = {
        background: `url('${vm.user.photoURL}') bottom right 15% no-repeat #fff`
      };
    }

  }

  angular
    .module('appChat')
    .component('home', homeComponent);

}(window.angular);
