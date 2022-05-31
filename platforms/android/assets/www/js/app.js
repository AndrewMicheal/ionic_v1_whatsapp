// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
let app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('chats' , {
    url : '/chats' ,
    views : {
      'chat-header' : {
        templateUrl : 'templates/hompage.html',
      } ,
      'chat-content' : {
        templateUrl : 'templates/Chats.html',
        controller : 'ChatController'
      }
    }
  })
  .state('status',{
    url : '/status',

    views : {
      'status-header' : {
        templateUrl : 'templates/hompage.html',
      } ,
      'status-content' : {
        templateUrl : 'templates/Status.html',
        controller : 'StatusController'
      }
    }
  })
  .state('calls',{
    url : '/calls',
    views : {
      'call-header' : {
        templateUrl : 'templates/hompage.html',
      } ,
      'call-content' : {
        templateUrl : 'templates/Calls.html',
        controller : 'CallController'
      }
    }
  })

  .state('converstion',{
    url : '/converstion/:fName',
    views : {
      'conv-header' : {
        templateUrl : 'templates/converstion-header.html',
      } ,
      'conv-content' : {
        templateUrl : 'templates/converstion-page.html',
        controller : 'ConverstionController'
      }
    }
  })




   $urlRouterProvider.otherwise("/chats");

})

