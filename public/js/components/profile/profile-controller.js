angular.module('profile').controller('profileController',['$scope', function ($scope) {


      

      //========================FUNCIONES PROFILE===============================

      //1--=====================================================================
      //Funcion para sumar todos los puntos totales que lleva actualmente el
      //usuario en Matematicas.

      function puntosTotales ()  {
        $scope.puntosTotalesMates = 0;

        $scope.usuario.usuario[0].matematicas.forEach(function(juegosMatematicas) {

            $scope.puntosTotalesMates = $scope.puntosTotalesMates + juegosMatematicas.juego.puntos;
        });
      }

      //2--=====================================================================
      //Funcion para saver el ultimo juego que esta cursando el usuario.
      //Eso lo podemos saber gracias al estado del juego.
      // Estado 0  --> El juego ya esta disponible
      // Estado 1 --> El usuario ya ha jugado a ese juego
      // Estado 3 --> El juego ha sido jugado pero con muchos errors (recordar).

      function juegoMatesActual() {
        var i = 0;

        $scope.usuario.usuario[0].matematicas.forEach(function(juegosMatematicas) {
            console.log(juegosMatematicas);

            if (juegosMatematicas.juego.estado === 0) {

              return  $scope.ultimoNivel = juegosMatematicas.juego.titulo;

            } else {
              return $scope.ultimoNivel = "Aun no has jugado ningun nivel";
            }

        });

      }

      //=============================Fin FUNCIONES PROFILE======================




      //=======================Ejecucion de las funciones ======================

      juegoMatesActual();

      puntosTotales();

    }]);
