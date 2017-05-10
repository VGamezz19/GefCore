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
       console.log(response.data);
       //Guardamos el "data" del juego seleccionado por el usuario.
           $scope.juegoActual = response.data;

       //montamos la variable "juegos" como un array para poder mostrarlo en la template.
           var jugado;
           //Cuando el usuario es nuevo en la plataforma, el array de matematicas esta vacio y
           //el forEach no recorre matematicas.,
           if ($rootScope.thisUser.matematicas.length === 0) {
             jugado = false;
           } else {
             //Recorremos todos lo juegos de matematicas del usuario conectado
            $rootScope.thisUser.matematicas.forEach(function(identUser) {

               //Si el usuario tiene un juego con la misma id que el juego actual,
               //La variable "jugado" se pondra el true.
                   if (identUser.juego.identi == $scope.juegoActual.identi) {
                       jugado = true;
                       console.log("ya has jugado a este juego antes");
                   } else {
                       jugado = false;
                   }
               });
           }

           // Fuera del forEach (una vez terminada la comprobación de si se ha jugado a no)
           //Usamos la variable "Jugado" para  añadirle al usuario conectado el nuevo juego o no
           //Si NO lo ha jugado, le añadiremos un nuevo juego en "matematicas" con los datos del juego
           //que ha entrado.
           if (jugado === false) {

             var time = new Date();
             $scope.newJuego = {"juego": {"identi": $scope.juegoActual.identi,"titulo": $scope.juegoActual.titulo,"nivel": $scope.juegoActual.nivel,"puntuacion": 0,"estado": 0,"correctas": 0,"incorrectas": 0,"ultimoUso": time}}
               console.log($scope.newJuego);
                   $http({
                     method: 'POST',
                     url: '/createGame',
                     data: $scope.newJuego,
                     headers : {'Accept' : 'application/json'}
                 }).then(function successCallback(response) {
                     //console.log(response);
                 }) ;
           }

       }, function errorCallback(response) {
              console.log(response);
       });


       //Scope donde guardamos las respuestas de todos los juegos.
       //Array de 5 porque hay 5 preguntas.
       $scope.inputsPreguntas = ["","","","",""];

       $scope.uploadGame = function() {

        $scope.errores = 0;
        $scope.correctas = 0;
        $scope.puntuacion  = 0;

          for (var i = 0; i < $scope.inputsPreguntas.length; i++) {
              console.log($scope.inputsPreguntas[i]);

              if ($scope.inputsPreguntas[i] == $scope.juegoActual.preguntas[i].pregunta.respuesta) {
                $scope.correctas = $scope.correctas + 1;
                $scope.puntuacion = $scope.puntuacion + $scope.juegoActual.preguntas[i].pregunta.puntuacion;

              } else {
                $scope.errores = $scope.errores + 1;
              }
          }

        $scope.sumaPuntos = $rootScope.thisUser.puntuacion.matematicas + $scope.puntuacion;
        var cnt = 0;
        var j = 0;

        $rootScope.thisUser.matematicas.forEach(function(thisMatematicasGameUser) {

          if(thisMatematicasGameUser.juego.identi == $scope.juegoActual.identi) {
            cnt = j;
            console.log(cnt);
          }
          j = j + 1;
        });


        var updateUserGame = $rootScope.thisUser.matematicas[cnt];


        //Si tiene 3 o máserrores, el juego tendra estado 3.
        //Significa que ha jugado el juego con dificultad.
        //Luego en el profile, se le recordara, que deveria volverlo hacer
        //Para mejorar su marca
        if ($scope.errores >=3) {
          $scope.estado = 3;
        } else {
          $scope.estado = 1;
        }

        var time = new Date();
        $scope.updateGame = {"_id":updateUserGame._id,"juego": {"identi": $scope.juegoActual.identi,"titulo": $scope.juegoActual.titulo,"nivel": $scope.juegoActual.nivel,"puntuacion": $scope.puntuacion,"estado": $scope.estado,"correctas": $scope.correctas,"incorrectas": $scope.errores,"ultimoUso": time}}
        //console.log($scope.newJuego);

            $http({
              method: 'POST',
              url: '/updateGame',
              data: $scope.updateGame,
              headers : {'Accept' : 'application/json'}
          }).then(function successCallback(response) {
              console.log(response);
              /*  $http({
                  method: 'POST',
                  url: '/updateGame',
                  data: $scope.newJuego,
                  headers : {'Accept' : 'application/json'}
              }).then(function successCallback(response) {

                //Abrimos el modal que mostrara los datos del usuario.
                  $(".correccion").modal();
              }) ; */
          }) ;

       }



  }]);
