!function(angular, firebase) {
  'use strict';

angular
  .module('appChat')
  .service('message', messageService);

messageService.$inject = [];

function messageService() {
  this.save = save;
  this.startListening = startListening;

  //////////

  function save(data) {
    var currentUser = firebase.auth().currentUser;
    data.user = currentUser.displayName;

    return firebase.database().ref().child('messages').push(data);
  }

  function startListening(cb) {
    firebase.database().ref().child('messages')
      .on('child_added', function (snapshot) {
        cb(snapshot.val());
      });
  }
}

}(window.angular, window.firebase);
