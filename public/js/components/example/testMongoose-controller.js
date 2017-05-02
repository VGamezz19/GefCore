
angular.module('example').controller('testMongooseController',['$scope', '$http', function ($scope,$http) {
    $scope.test = "soy de la template mongoose";
    console.log("controller");
    // Simple GET request example:
    $http({
      method: 'GET',
      url: '/getAll'
    }).then(function successCallback(response) {
        var data = response.data;
        $scope.usuarios = data;
      }, function errorCallback(response) {
        console.log("error");
      });
      $http({
        method: 'GET',
        url: '/currentUser'
      }).then(function successCallback(response) {
          console.log(response.data);

        }, function errorCallback(response) {
          console.log("error");
        });

  }]);
