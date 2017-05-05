  angular.module('juego').controller('juegoController',['$scope','$http','$rootScope','$routeParams', function ($scope,$http,$rootScope, $routeParams) {

    var id = $routeParams.ID;


    $http({
      method: 'GET',
      url: '/getIdMates',
      params: {'id': 'juego1'},
      headers : {'Accept' : 'application/json'}
    }).then(function successCallback(response) {
          var jugandose = response.data;
          $scope.juegos = [];

          $scope.juegos.push(response.data.juego1);
          $scope.juegos.push(response.data.juego2);
          $scope.juegos.push(response.data.juego3);
          $scope.juegos.push(response.data.juego4);
          $scope.juegos.push(response.data.juego5);

          var time = new Date();


          //If jugador nunca ha entrado a este nivel.
          var NewJuego = {identi: jugandose.identi ,titulo: jugandose.titulo,nivel: jugandose.nivel,  puntuacion: 0,  estado: 0, correctas: 0, incorrectas: 0, ultimoUso: time};

          $http({
            method: 'POST',
            url: '/updateGame',
            data: {'juego': NewJuego},
          //  headers : {'Accept' : 'application/json'}
        }).then(function successCallback(response) {
            console.log(response.data);
        }) ;

          //Else
          //===
          //====

      }, function errorCallback(response) {

      });

  }]);
