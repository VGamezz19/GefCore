


  angular.module('profile').controller('profileController',['$scope', function ($scope) {
      var jsonObject = '{"usuario": [{"username": "vgamez","firstname": "victor",'  +
      '"lastname": "gamez","email": "pictor.games@gmail.com","puntuacion": {"mates": 500,"ingles": 600},' +
      '"matematicas": [{"juego": {"titulo": "suma se puedes 1","puntos": 100,"estado": 1}},{"juego": {' +
				'"titulo": "suma se puedes 2","puntos": 100,"estado": 1}},{"juego": {"titulo": "suma se puedes 3",'+
				'"puntos": 100,"estado": 0}}],"ingles": {"juego1": {"titulo": "hello 1","puntos": 100,"estado": 1},'+
			'"juego2": {"titulo": "hello 2","puntos": 100,"estado": 1	},"juego3": {"titulo": "hello 3","puntos": 100,' +
				'"estado": 0}}}]}';


      $scope.usuario = JSON.parse(jsonObject);

      $scope.juegoMatesActual = function() {
        console.log($scope.usuario.usuario[0].matematicas);

        var i = 0;
        $scope.usuario.usuario[0].matematicas.forEach(function(juegosMatematicas) {
            console.log(juegosMatematicas);

            if (juegosMatematicas.juego.estado === 0) {

              return  $scope.ultimoNivel = juegosMatematicas.juego.titulo;

            } else {
              return false;
            }
        });

      };

    }]);

//module('testText').controller('testController',['$scope', function ($scope) {
//para pasarle el $scope
