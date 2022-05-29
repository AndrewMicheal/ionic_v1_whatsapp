let StatusController = angular.module('starter');

StatusController.controller('StatusController' , function($scope) {
  let statusLoc = window.location.href;
  $scope.statusURL = statusLoc.includes('index.html#/chats');
  $scope.chatURL = statusLoc.includes('index.html#/calls');
  $scope.url = statusLoc.includes('localhost');

  if(statusLoc.includes('index.html#/chats')) {
    let replaceLoc =  statusLoc.replace('index.html#/chats','images/img_avatar.png');
    $scope.imgStatus = replaceLoc;

  } else if(statusLoc.includes('index.html#/calls')) {
    let replaceLoc =  statusLoc.replace('index.html#/calls','images/img_avatar.png');
    $scope.imgUrl = replaceLoc;
  } else {
    $scope.statusLoc = false;
  }

})
