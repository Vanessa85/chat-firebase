  !function(angular, firebase) {
    'use strict';

    angular
      .module('appChat')
      .provider('firebaseApp', firebaseAppProvider);

    function FirebaseApp(config) {
      this.app = firebase.initializeApp(config);
    }

    FirebaseApp.prototype = {
      get: function() {
        return this.app;
      },
      authenticate: function() {
        return new Promise(function(resolve, reject) {
          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              resolve(user);
            } else {
              reject(new Error('no user'));
            }
          });
        });
      },
      isAuthenticate: function() {
        return firebase.auth().currentUser;
      },
      authFB: function() {
        var provider = new firebase.auth.FacebookAuthProvider();
        return firebase.auth().signInWithPopup(provider);
      },
      authTW: function() {
        var provider = new firebase.auth.TwitterAuthProvider();
        return firebase.auth().signInWithPopup(provider);
      },
      signOut: function() {
        return firebase.auth().signOut();
      }
    };


    firebaseAppProvider.$inject = [];
    function firebaseAppProvider() {
      var config = {};

      this.setConfig = function(firebaseConfig) {
        config = firebaseConfig;
      };

      this.$get = [function() {
        return new FirebaseApp(config);
      }];
    }

  }(window.angular, window.firebase);
