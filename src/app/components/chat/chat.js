!function(angular) {
  'use strict';

  var chatComponent = {
    templateUrl: '/app/components/chat/chat.html',
    controller: chatCtrl
  };

  chatCtrl.$inject = [];
  function chatCtrl() {

  }

  angular
    .module('appChat')
    .component('chat', chatComponent);

}(window.angular);
