angular.module('login').controller('loginController',['$scope', function ($scope) {
    $scope.titulo = "login";
    $scope.loginInit = function () {
      console.log("hola");

            $('.modal').modal('toggle')
          
        };
  }]);
