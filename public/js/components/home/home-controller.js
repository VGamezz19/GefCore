
angular.module('homeModule').controller('homeController',['$scope', '$http', function ($scope,$http) {
  $(".container-fluid").show();
    // Simple GET request example:
    $http({
      method: 'GET',
      url: '/singUp'
    }).then(function successCallback(response) {
        var data = response.data;
        $scope.usuarios = data;
      }, function errorCallback(response) {
        console.log("error");
      });
  }]);
