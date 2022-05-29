let CallController = angular.module('starter');

CallController.controller('CallController' , function($scope) {
  let callLoc = window.location.href;
  $scope.chatURL = callLoc.includes('index.html#/chats');
  $scope.statusURL = callLoc.includes('index.html#/status');
  $scope.url = callLoc.includes('localhost');

  if(callLoc.includes('index.html#/chats')) {
    let replaceLoc =  callLoc.replace('index.html#/chats','images/img_avatar.png');
    $scope.imgStatus = replaceLoc;

  } else if(callLoc.includes('index.html#/status')) {
    let replaceLoc =  callLoc.replace('index.html#/status','images/img_avatar.png');
    $scope.imgUrl = replaceLoc;
  } else {
    $scope.callLoc = false;
  }
})
