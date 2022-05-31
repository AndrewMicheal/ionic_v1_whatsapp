let ConverstionHeaderController = angular.module('starter');

ConverstionHeaderController.controller('ConverstionHeaderController' , function($scope , $stateParams ,$state) {
  $scope.user = $stateParams.fName;
  let convesrtionLoc = window.location.href;
  $scope.convesrtionURL = convesrtionLoc.includes('index.html#/chats');

  $scope.url = convesrtionLoc.includes('localhost');

  if(convesrtionLoc.includes('index.html#/chats')) {
    let replaceLoc =  convesrtionLoc.replace('index.html#/chats','images/img_avatar.png');
    $scope.imgconvesrtion = replaceLoc;

  }

  $scope.backButton = function() {
    $state.go('chats')
  }
})
