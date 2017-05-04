
angular.module('example').controller('testMongooseController',['$scope', '$http', '$rootScope', function ($scope,$http, $rootScope) {
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

      console.log($rootScope.currentUser);
      this.usuarios = $rootScope.currentUser._id;

  }]);
