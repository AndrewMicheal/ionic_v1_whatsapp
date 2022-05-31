let HomeController = angular.module('starter');

HomeController.controller('HomeController' , function($scope, $ionicPopover , $state , $ionicViewService , $ionicPopover , $location) {

let loc = window.location.href;

  let chat = document.getElementById("chat");
  // let status = document.getElementById("status");
  let calls = document.getElementById("calls");

  $scope.activeChat = $location.$$absUrl.includes('chats');
  $scope.activeCalls = $location.$$absUrl.includes('calls');


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

  // if($location.$$absUrl.includes('chats')) {
  //   chat.classList.add('active');
  //   calls.classList.remove('active')
  // } else if ($location.$$absUrl.includes('calls')) {
  //   calls.classList.add('active');
  //   chat.classList.remove('active')
  // }






 $scope.goToPage = function(page) {
   if(page === 'chats') {
     if(chat.classList.contains('active')) {
       calls.classList.add('active');
       chat.classList.remove('active')
     } else {
       console.log('no')
     }
   } else {
    console.log(calls)

   }
   $state.go(page)
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
