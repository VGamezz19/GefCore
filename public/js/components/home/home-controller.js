
angular.module('homeModule').controller('homeController',['$scope', '$http', function ($scope,$http) {
    $scope.test = "soy de la template mongoose";
    console.log("controller");
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
