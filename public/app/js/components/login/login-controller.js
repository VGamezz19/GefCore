angular.module('login').controller('loginController',['$scope', function ($scope) {
    $scope.titulo = "login";
    $scope.loginInit = function () {
            $('.modal').modal('toggle');
            $('#username').focus();
        };
    $scope.focus = function() {

      console.log("hola");

    };
  }]);
