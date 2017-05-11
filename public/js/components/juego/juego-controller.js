angular.module('juego').controller('juegoController',['$scope','$http','$rootScope','$routeParams', '$route', function ($scope,$http,$rootScope,$routeParams,$route) {

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

     //montamos la variable "juegos" como un array para poder mostrarlo en la template.
         var jugado = false;
         //Cuando el usuario es nuevo en la plataforma, el array de matematicas esta vacio y
         //el forEach no recorre matematicas.,
         if ($rootScope.thisUser.matematicas.length == 0) {
           jugado = false;
         } else {
           //Recorremos todos lo juegos de matematicas del usuario conectado
          $rootScope.thisUser.matematicas.forEach(function(identUser) {

             //Si el usuario tiene un juego con la misma id que el juego actual,
             //La variable "jugado" se pondra el true.
             if(!jugado) {

                 if (identUser.juego.identi == $scope.juegoActual.identi) {
                     jugado = true;
                 }
              }
             });
         }

         // Fuera del forEach (una vez terminada la comprobación de si se ha jugado a no)
         //Usamos la variable "Jugado" para  añadirle al usuario conectado el nuevo juego o no
         //Si NO lo ha jugado, le añadiremos un nuevo juego en "matematicas" con los datos del juego
         //que ha entrado.
         console.log(jugado);
         if (jugado === false) {
          console.log("NUNCA HA JUGADO COÑO", jugado);
           var time = new Date();
           $scope.newJuego = {"juego": {"identi": $scope.juegoActual.identi,"titulo": $scope.juegoActual.titulo,"nivel": $scope.juegoActual.nivel,"puntuacion": 0,"estado": 0,"correctas": 0,"incorrectas": 0,"ultimoUso": time}}

                 $http({
                   method: 'POST',
                   url: '/createGame',
                   data: $scope.newJuego,
                   headers : {'Accept' : 'application/json'}
               }).then(function successCallback(response) {
                 //recargamos la informacion actual del usuario.
                   $rootScope.currentUser();
               }) ;
         }

     }, function errorCallback(response) {

     });


     //Scope donde guardamos las respuestas de todos los juegos.
     //Array de 5 porque hay 5 preguntas.
     $scope.inputsPreguntas = ["","","","",""];

     //Funcion que se ejecutara cuando el usuario pulse el boton de "corregir nivel"
     $scope.uploadGame = function() {

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
      console.log($scope.puntosOld);
      console.log( "cnt",cnt);

      var time = new Date();
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

        //Restamos la puntuacion general de matematicas del usuario por los puntos antiguos conseguidos
        //en ese mismo nivel
        $scope.sumaPuntos  = $rootScope.thisUser.puntuacion.matematicas - $scope.puntosOld;

        //Sumamos la puntuacion general de matematicas del usuario por los puntos actuales que ha conseguido
        //el usuario jugando en este nivel
        $scope.sumaPuntos = $rootScope.thisUser.puntuacion.matematicas + $scope.puntuacion;

        $rootScope.thisUser.puntuacion.matematicas = $scope.sumaPuntos;

        //Insertamos los puntos actualizados del nivel
        $http({
          method: 'POST',
          url: '/puntosMates',
          data: $rootScope.thisUser,
      }).then(function successCallback(response) {
          console.log(response);
        //Abrimos el modal que mostrara los datos del usuario.
          $(".correccion").modal();
      });
      });

     }



}]);
