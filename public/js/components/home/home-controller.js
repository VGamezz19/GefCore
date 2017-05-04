
angular.module('homeModule').controller('homeController',['$scope', '$http', '$rootScope' ,function ($scope,$http,$rootScope) {
  $(".container-fluid").show();

  this.userCurrent = $rootScope.currentUser;
  }]);
