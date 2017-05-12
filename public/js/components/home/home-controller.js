
angular.module('homeModule').controller('homeController',['$scope', '$http', '$rootScope' ,function ($scope,$http,$rootScope) {
  $(".container-fluid").show();

  $scope.tituloJuego;
  $scope.link;
  $scope.nivel;

    $rootScope.currentUser();

    if ($rootScope.thisUser.matematicas.length == 0){
      $scope.tituloJuego = "Aun no has jugado";
      $scope.link = "";
      $scope.nivel = "";
    } else {
      $scope.nivel = 0;
      $rootScope.thisUser.matematicas.forEach(function(actualUser) {
          if (actualUser.juego.estado == 0) {

            if ($scope.nivel < actualUser.juego.nivel) {
              $scope.nivel = actualUser.juego.nivel;
              $scope.link = actualUser.juego.identi;
              $scope.tituloJuego = actualUser.juego.titulo;
            }

          }
      });

    }

    if ($rootScope.thisUser.ingles.length == 0){
      $scope.tituloJuegoing = "Aun no has jugado";
      $scope.linking = "";
      $scope.niveling = "";
    } else {
      $scope.niveling = 0;
      $rootScope.thisUser.ingles.forEach(function(actualUser) {
          if (actualUser.juego.estado == 0) {

            if ($scope.niveling < actualUser.juego.nivel) {
              $scope.niveling = actualUser.juego.nivel;
              $scope.linking = actualUser.juego.identi;
              $scope.tituloJuegoing = actualUser.juego.titulo;
            }

          }
      });

    }








  }]);
