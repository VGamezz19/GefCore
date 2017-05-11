angular.module('profile').controller('profileController',['$scope','$http', function ($scope, $http) {

      $http({
        method: 'GET',
        url: '/currentUser',

      }).then(function successCallback(response) {
        $scope.currentUser = response.data;

        //========================FUNCIONES PROFILE===============================

        //1--=====================================================================
        //Funcion para sumar todos los puntos totales que lleva actualmente el
        //usuario en Matematicas.

        function puntosTotales ()  {
          $scope.puntosTotalesMates = 0;
              $scope.puntosTotalesMates = $scope.currentUser.puntuacion.matematicas;
        }

        //2--=====================================================================
        //Funcion para saver el ultimo juego que esta cursando el usuario.
        //Eso lo podemos saber gracias al estado del juego.
        // Estado 0  --> El juego ya esta disponible
        // Estado 1 --> El usuario ya ha jugado a ese juego
        // Estado 3 --> El juego ha sido jugado pero con muchos errors (recordar).

        function juegoMatesActual() {
          $scope.ultimoNivel =[];
          //Si el array de matematicas, esta vacio, significa que aun no ha jugado
          if ($scope.currentUser.matematicas.length == 0) {
            $scope.ultimoNivel = "Aun no has jugado ningun juego de mates";
          } else {
            $scope.currentUser.matematicas.forEach(function(juegosMatematicas) {
                console.log(juegosMatematicas);
                if (juegosMatematicas.juego.estado === 0) {
                    //Hacemos un push de los juegos disponibles.
                    $scope.ultimoNivel.push(juegosMatematicas);


                } else  {
                   $scope.ultimoNivel = "Has superado todos los juegos de Mates!";
                   $scope.TodoSuperadoMates = true;
                }

            });
          }


        }

        //=============================Fin FUNCIONES PROFILE======================




        //=======================Ejecucion de las funciones ======================

        juegoMatesActual();

        puntosTotales();

      }, function errorCallback(res) {
        return false;
          console.log("error");
      });


      }]);
