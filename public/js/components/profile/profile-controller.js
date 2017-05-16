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
          $scope.ultimoRegistro = [];
          $scope.repetir = [];

          $scope.totalErrores = 0;
          $scope.totalCorrecto = 0;
          //Si el array de matematicas, esta vacio, significa que aun no ha jugado


            $scope.currentUser.matematicas.forEach(function(juegosMatematicas) {

              $scope.totalErrores =  $scope.totalErrores + juegosMatematicas.juego.incorrectas;
              $scope.totalCorrecto = $scope.totalCorrecto + juegosMatematicas.juego.correctas;

                if (juegosMatematicas.juego.estado === 0) {
                    $scope.ultimoNivel.push(juegosMatematicas);
                }
                if (juegosMatematicas.juego.estado === 1) {
                    $scope.ultimoRegistro.push(juegosMatematicas);
                }
                if (juegosMatematicas.juego.estado === 3) {
                    $scope.repetir.push(juegosMatematicas);
                }
            });


        }

        function juegoInglesActual() {
          $scope.ultimoNivelIng =[];
          $scope.ultimoRegistroIng = [];
          $scope.repetirIng = [];

          $scope.totalErroresIng = 0;
          $scope.totalCorrectoIng = 0;
          //Si el array de matematicas, esta vacio, significa que aun no ha jugado


            $scope.currentUser.ingles.forEach(function(juegosIngles) {

              $scope.totalErroresIng =  $scope.totalErrores + juegosIngles.juego.incorrectas;
              $scope.totalCorrectoIng = $scope.totalCorrecto + juegosIngles.juego.correctas;

                if (juegosIngles.juego.estado === 0) {
                    $scope.ultimoNivelIng.push(juegosIngles);
                }
                if (juegosIngles.juego.estado === 1) {
                    $scope.ultimoRegistroIng.push(juegosIngles);
                }
                if (juegosIngles.juego.estado === 3) {
                    $scope.repetirIng.push(juegosIngles);
                }
            });


        }

        //=============================Fin FUNCIONES PROFILE======================




        //=======================Ejecucion de las funciones ======================

        juegoMatesActual();
        juegoInglesActual();
        puntosTotales();

      }, function errorCallback(res) {
        return false;
          console.log("error");
      });


      }]);
