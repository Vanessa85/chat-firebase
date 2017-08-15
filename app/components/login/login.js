!function(angular) {
    'use strict';
    var loginComponent = {
        templateUrl: 'app/components/login/login.html',
        controller: LoginCtrl
    };

    function LoginCtrl() {
        var vm = this;
        vm.name = "vanessa";
    }


    LoginCtrl.$inject = [];

    angular
        .module('appChat')
        .component('login', loginComponent);


}(window.angular);