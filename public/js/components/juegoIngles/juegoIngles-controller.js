angular.module('juegoIngles').controller('juegoInglesController',['$scope','$http','$rootScope','$routeParams', '$route', '$window','UserCurrent','$location', function ($scope,$http,$rootScope,$routeParams,$route, $window, UserCurrent, $location) {

//==============================================================================


   var id = $routeParams.ID;
   $scope.checkbox;
//Recuperamos el juego actual de MongoDB con la ID del juego "identi"
   $http({
     method: 'GET',
     url: '/getIdIngles',
     params: {'id': id},
     headers : {'Accept' : 'application/json'}
   }).then(function successCallback(response) {
     //Guardamos el "data" del juego seleccionado por el usuario.
         $scope.juegoActual = response.data;

         setTimeout(function(){

           $(".juego1").show();
         },100);

         UserCurrent.getUser().then(function (user) {
           var usuario = user;
           if (usuario.puntuacion.matematicas < $scope.juegoActual.puntuacionTotal) {
              $location.path( "/" );
           }
         })

     }, function errorCallback(response) {

     });

     //Funcion jquery para ejecutar algo despues de usar un modal
     $('.correccion').on('hidden.bs.modal', function () {
        $window.location.assign('/matematicas');
     });

         $scope.ids = [];
         $('.checkbox').not(this).prop('checked', false);

       $scope.IfCheck = function(id, check) {
         if (check) {
           $scope.ids.push(id);
         } else {
           var index = $scope.ids.indexOf(id);
           $scope.ids.splice(index, 1);
         }
         console.log("ids", $scope.ids);
       };

     //Funcion que se ejecutara cuando el usuario pulse el boton de "corregir nivel"
     $scope.uploadGame = function() {

      var time = new Date();
      var hora = time.getHours();
      time.setHours(hora + 2);
      $scope.errores = 0;
      $scope.correctas = 0;
      $scope.puntuacion  = 0;

      if ($scope.ids.length > 5) {


      } else {

        for (var i = 0; i < $scope.ids.length; i++) {

            if ($scope.ids[i] == $scope.juegoActual.preguntas[i].pregunta.respuesta) {
              $scope.correctas = $scope.correctas + 1;
              $scope.puntuacion = $scope.puntuacion + $scope.juegoActual.preguntas[i].pregunta.puntuacion;

            } else {
              $scope.errores = $scope.errores + 1;
            }
        }
        UserCurrent.getUser()
           .then( function(user) {
             $scope.thisUser = user;


             //Necesitamos tener constancia de en que posicion tiene el usuario el registro del juego
             //que esta jugando, para luego buscar la ID del nivel cursado y actualizar los datos
             //en la colleccion de Usuarios (para tener un historico)
             var cnt = 0;
             var j = 0;
             $scope.thisUser.ingles.forEach(function(thisMatematicasGameUser) {
               if(thisMatematicasGameUser.juego.identi == $scope.juegoActual.identi) {
                 cnt = j;

               }
               j = j + 1;
             });

             // Guardamos la _id de matematicas del usuario conectado.
             var idGameUser = $scope.thisUser.ingles[cnt]._id;



             //Si tiene 3 o máserrores, el juego tendra estado 3.
             //Significa que ha jugado el juego con dificultad.
             //Luego en el profile, se le recordara, que deveria volverlo hacer
             //Para mejorar su marca
             if ($scope.errores >= 3) {
               $scope.estado = 3;
             } else {
               $scope.estado = 1;
             }
             //los puntos anteriores de este juego
             $scope.puntosOld = $scope.thisUser.ingles[cnt].juego.puntuacion;

             $scope.updateGame = {"_id":idGameUser,"juego": {"identi": $scope.juegoActual.identi,"titulo": $scope.juegoActual.titulo,"nivel": $scope.juegoActual.nivel,"puntuacion": $scope.puntuacion,"estado": $scope.estado,"correctas": $scope.correctas,"incorrectas": $scope.errores,"ultimoUso": time}}
             $http({
               method: 'POST',
               url: '/deleteIngles',
               data: $scope.updateGame,
               headers : {'Accept' : 'application/json'}
             }).then(function successCallback(response) {

                 $http({
                   method: 'POST',
                   url: '/updateIngles',
                   data: $scope.updateGame,
                   headers : {'Accept' : 'application/json'}
               }).then(function successCallback(response) {

               });


               if ($scope.puntosOld > $scope.puntuacion) {

               } else {
                 var actualP = $scope.thisUser.puntuacion.ingles;
                 var oldPuntos = $scope.puntosOld;
                 var newPuntos = $scope.puntuacion;
                 var puntuacionFinal = 0;

                 puntuacionFinal = actualP - oldPuntos;
                 puntuacionFinal = puntuacionFinal + newPuntos;
                 $scope.thisUser.puntuacion.ingles = puntuacionFinal;
               }

               //Insertamos los puntos actualizados del nivel
               $http({
                 method: 'POST',
                 url: '/puntosIngles',
                 data: $scope.thisUser,
             }).then(function successCallback(response) {
               //Abrimos el modal que mostrara los datos del usuario.
         ////****!!!!!
                 $(".correccion").modal();

                 $http({
                   method: 'GET',
                   url: '/getAllIngles'
                 }).then(function successCallback(response) {

                     $scope.matematicasList = response.data;

                     $scope.matematicasList.forEach(function(allMates) {

                     var jugado = false ;
                     if($scope.thisUser.puntuacion.ingles > allMates.puntuacionTotal ) {

                        $scope.thisUser.ingles.forEach(function(identUser) {

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
                                     url: '/createIngles',
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

        })

      }
      $(".correccion").modal();
  }
}]);
