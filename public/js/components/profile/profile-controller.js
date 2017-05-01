angular.module('profile').controller('profileController',['$scope', function ($scope) {

      var jsonObject = '{"usuario": [{"username": "vgamez","firstname": "victor",'  +
      '"lastname": "gamez","email": "pictor.games@gmail.com","puntuacion": {"mates": 500,"ingles": 600},' +
      '"matematicas": [{"juego": {"titulo": "suma se puedes 1","puntos": 100,"estado": 1}},{"juego": {' +
				'"titulo": "suma se puedes 2","puntos": 100,"estado": 1}},{"juego": {"titulo": "suma se puedes 3",'+
				'"puntos": 100,"estado": 0}}],"ingles": {"juego1": {"titulo": "hello 1","puntos": 100,"estado": 1},'+
			'"juego2": {"titulo": "hello 2","puntos": 100,"estado": 1	},"juego3": {"titulo": "hello 3","puntos": 100,' +
				'"estado": 0}}}]}';

      $scope.usuario = JSON.parse(jsonObject);

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
      // Estado 0  --> El usuario ha desbloqueado el juego, pero aun no lo ha jugado
      // Estado 1 --> El usuario ya ha jugado a ese juego
      // Estado 2 --> El usuario no puede entrar al juego por falta de "Puntos"
      // Estado 3 --> El juego ha sido pasado con 0 errores, y esta perfecto.

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

//module('testText').controller('testController',['$scope', function ($scope) {
//para pasarle el $scope
