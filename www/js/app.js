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
    templateUrl : 'templates/Chats.html',
    controller : 'ChatController'
  })
  .state('status',{
    url : '/status',
    templateUrl : 'templates/Status.html',
    controller : 'StatusController'
  })
  .state('calls',{
    url : '/calls',
    templateUrl : 'templates/Calls.html',
    controller : 'CallController'
  })




  //  $urlRouterProvider.otherwise("/home");

})

app.controller('ctr' , function($scope, $ionicPopover , $state , $ionicViewService) {

  $scope.image = window.location.host;

  let chat = document.getElementById("chat");
  let status = document.getElementById("status");
  let calls = document.getElementById("calls");

  var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

  $scope.show = function() {
    alert("welcime")
  }

  $scope.newGroup = function() {
    alert("new Group")
  }

  $scope.newBroadCast = function() {
    alert("newBroadCast")
  }

  $scope.linkDevices = function() {
    alert("linkDevices");
  }

  $scope.starredMessages = function() {
    alert("starredMessages")
  }

  $state.go("chats")


 $scope.goToPage = function(page) {
   if(page === 'chats') {
     chat.classList.add('active');
     status.classList.remove("active");
     calls.classList.remove("active");
   } else if(page === "status") {
    chat.classList.remove('active');
    status.classList.add("active");
    calls.classList.remove("active");
   } else {
    chat.classList.remove('active');
    status.classList.remove("active");
    calls.classList.add("active");
   }
   $ionicViewService.nextViewOptions({
    disableBack: true
});
   $state.go(page, {})
 }

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };

})
