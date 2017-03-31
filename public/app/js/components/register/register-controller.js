angular.module('register').controller('registerController',['$scope', function ($scope) {
  $scope.titulo = "Register";
  $scope.registerInit = function () {
  //Jquery Bootstrap. Modal Toggle LOGIN
    $('.modal').modal('toggle');
      //setTimeout totalmente necesario.
    setTimeout(focus, 300);

    function focus () {
        //A los 0,3 segundos landa la funcion focus sobre el inputLogin
      $('#username').focus();
    }
    $('#cancel').click(function(){
      $('.modal').modal('toggle');
      window.location = window.location - "/register";
    });
  };



  }])
