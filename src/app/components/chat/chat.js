!function(angular) {
  'use strict';

  var chatComponent = {
    templateUrl: '/app/components/chat/chat.html',
    controller: chatCtrl
  };

  chatCtrl.$inject = ['$scope', 'message', 'notie'];
  function chatCtrl($scope, message, notie) {
    var vm = this;
    vm.$onInit = onInit;
    vm.send = send;
    vm.messages = [];

    //////////

    function onInit() {
      vm.message = '';
      message.startListening(function(data) {
        $scope.$applyAsync(function() {
          vm.messages.push(data);
        });
      });
    }

    function send(evt) {
      evt.preventDefault();
      var timestamp = Math.round(Date.now()/1000); // timestamp in seconds
      message.save({ text: vm.message, timestamp: timestamp })
        .then(function() {
          $scope.$applyAsync(function() {
            vm.message = '';
          });
        })
        .catch(function(err) {
          notie.error(err.message);
        });
    }

  }

  angular
    .module('appChat')
    .component('chat', chatComponent);

}(window.angular);
