angular.module('login').controller('loginController',['$scope', function ($scope) {
  $scope.titulo = "login";
  $scope.loginInit = function () {
  //Jquery Bootstrap. Modal Toggle LOGIN
    $('.modal').modal('toggle');
      //setTimeout totalmente necesario.
    setTimeout(focus, 300);

    function focus () {
        //A los 0,3 segundos landa la funcion focus sobre el inputLogin
      $('#username').focus();
    }
  };

  }])
