angular.module('juego').controller('juegoController',['$scope','$http','$rootScope','$routeParams', '$route', function ($scope,$http,$rootScope,$routeParams,$route, $location) {

//==============================================================================


   var id = $routeParams.ID;
//Recuperamos el juego actual de MongoDB con la ID del juego "identi"
   $http({
     method: 'GET',
     url: '/getIdMates',
     params: {'id': id},
     headers : {'Accept' : 'application/json'}
   }).then(function successCallback(response) {
     //Guardamos el "data" del juego seleccionado por el usuario.
         $scope.juegoActual = response.data;

     }, function errorCallback(response) {

     });


     //Scope donde guardamos las respuestas de todos los juegos.
     //Array de 5 porque hay 5 preguntas.
     $scope.inputsPreguntas = ["","","","",""];

     //Funcion que se ejecutara cuando el usuario pulse el boton de "corregir nivel"
     $scope.uploadGame = function() {

      var time = new Date();
      var hora = time.getHours();
      time.setHours(hora + 2);
      $scope.errores = 0;
      $scope.correctas = 0;
      $scope.puntuacion  = 0;

      //En este FOR rellenamos los puntos/errores/aciertos del nivel realizado
        for (var i = 0; i < $scope.inputsPreguntas.length; i++) {

            if ($scope.inputsPreguntas[i] == $scope.juegoActual.preguntas[i].pregunta.respuesta) {
              $scope.correctas = $scope.correctas + 1;
              $scope.puntuacion = $scope.puntuacion + $scope.juegoActual.preguntas[i].pregunta.puntuacion;

            } else {
              $scope.errores = $scope.errores + 1;
            }
        }


      //Necesitamos tener constancia de en que posicion tiene el usuario el registro del juego
      //que esta jugando, para luego buscar la ID del nivel cursado y actualizar los datos
      //en la colleccion de Usuarios (para tener un historico)
      var cnt = 0;
      var j = 0;
      $rootScope.thisUser.matematicas.forEach(function(thisMatematicasGameUser) {
        if(thisMatematicasGameUser.juego.identi == $scope.juegoActual.identi) {
          cnt = j;

        }
        j = j + 1;
      });

      // Guardamos la _id de matematicas del usuario conectado.
      var idGameUser = $rootScope.thisUser.matematicas[cnt]._id;



      //Si tiene 3 o máserrores, el juego tendra estado 3.
      //Significa que ha jugado el juego con dificultad.
      //Luego en el profile, se le recordara, que deveria volverlo hacer
      //Para mejorar su marca
      if ($scope.errores >=3) {
        $scope.estado = 3;
      } else {
        $scope.estado = 1;
      }
      //los puntos anteriores de este juego
      $scope.puntosOld = $rootScope.thisUser.matematicas[cnt].juego.puntuacion;


      $scope.updateGame = {"_id":idGameUser,"juego": {"identi": $scope.juegoActual.identi,"titulo": $scope.juegoActual.titulo,"nivel": $scope.juegoActual.nivel,"puntuacion": $scope.puntuacion,"estado": $scope.estado,"correctas": $scope.correctas,"incorrectas": $scope.errores,"ultimoUso": time}}
      $http({
        method: 'POST',
        url: '/deleteGame',
        data: $scope.updateGame,
        headers : {'Accept' : 'application/json'}
      }).then(function successCallback(response) {

          $http({
            method: 'POST',
            url: '/updateGame',
            data: $scope.updateGame,
            headers : {'Accept' : 'application/json'}
        }).then(function successCallback(response) {

        });


        if ($scope.puntosOld > $scope.puntuacion) {

        } else {
          var actualP = $rootScope.thisUser.puntuacion.matematicas;
          var oldPuntos = $scope.puntosOld;
          var newPuntos = $scope.puntuacion;
          var puntuacionFinal = 0;

          puntuacionFinal = actualP - oldPuntos;
          puntuacionFinal = puntuacionFinal + newPuntos;
          $rootScope.thisUser.puntuacion.matematicas = puntuacionFinal;
        }

        //Insertamos los puntos actualizados del nivel
        $http({
          method: 'POST',
          url: '/puntosMates',
          data: $rootScope.thisUser,
      }).then(function successCallback(response) {
        //Abrimos el modal que mostrara los datos del usuario.
  ////****!!!!!
          $("botton").click(function(){
            $location.path( "/matematicas" );
          });
          $(".correccion").modal();

          $("botton").click(function(){
            $location.path( "/matematicas" );
          });

          $http({
            method: 'GET',
            url: '/getAllMates'
          }).then(function successCallback(response) {

              $scope.matematicasList = response.data;

              $scope.matematicasList.forEach(function(allMates) {

              var jugado = false ;
              if($scope.sumaPuntos > allMates.puntuacionTotal ) {

                 $rootScope.thisUser.matematicas.forEach(function(identUser) {

                    if(!jugado) {

                        if (identUser.juego.identi == allMates.identi && (identUser.juego.estado == 0 || identUser.juego.estado == 1 || identUser.juego.estado == 3)) {
                            jugado = true;
                        }
                     }
                    });

                    if (jugado == false && allMates.identi != id) {

                      var time = new Date();
                      $scope.newJuego = {"juego": {"identi": allMates.identi,"titulo": allMates.titulo,"nivel": allMates.nivel,"puntuacion": 0,"estado": 0,"correctas": 0,"incorrectas": 0,"ultimoUso": time}}

                            $http({
                              method: 'POST',
                              url: '/createGame',
                              data: $scope.newJuego,
                              headers : {'Accept' : 'application/json'}
                          }).then(function successCallback(response) {
                              $rootScope.currentUser();
                          }) ;
                    }
                } else {
                  jugado = false;
                }
              });
          }, function errorCallback(response) {
          });
      });
    });
  }
}]);
