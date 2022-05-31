let ChatController = angular.module('starter');

ChatController.controller('ChatController' , function($scope ,$state) {
  var loc = window.location.href;
  $scope.url = loc.includes("localhost");

  if(loc.includes('index.html')) {
   let replaceLoc1 =  loc.replace('index.html','images/img_avatar.png');
   let replaceLoc2 =  loc.replace('index.html','images/man-with-beard-avatar-character-isolated-icon-free-vector.jpg');
   $scope.img1 = replaceLoc1;
   $scope.img2 = replaceLoc2;
  }

  $scope.loadMore = function() {
    console.log("complete")
    $scope.$broadcast('scroll.infiniteScrollComplete');
    $scope.check = true
  }, 1000;

  $scope.goToChat = function(user) {
    $scope.item = user;

    $state.go('converstion',{fName:$scope.item})
  }

})
