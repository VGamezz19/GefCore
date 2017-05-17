
angular.module('homeModule').controller('homeController',['$scope', '$http', '$scope', 'UserCurrent' ,function ($scope,$http,$rootScope, UserCurrent) {
  $(".container-fluid").show();

  $scope.tituloJuego;
  $scope.link;
  $scope.nivel;


  UserCurrent.getUser()
     .then( function(user) {
       console.log(user.matematicas);
       $scope.thisUser = user

//Recuperamos THIS USER nada mas empezar la carga del HOME.

       if ($scope.thisUser.matematicas.length == 0){

         $scope.tituloJuego = "Aun no has jugado";
         $scope.link = "";
         $scope.nivel = "";

         //Recuperamos el juego actual de MongoDB con la ID del juego "identi"
        $http({
          method: 'GET',
          url: '/getIdMates',
          params: {'id': "juego1"},
          headers : {'Accept' : 'application/json'}
        }).then(function successCallback(response) {
          //Guardamos el "data" del juego seleccionado por el usuario.
              $scope.juegoActual = response.data;

              var time = new Date();
              var hora = time.getHours();
              time.setHours(hora + 2);

              $scope.newJuego = {"juego": {"identi": $scope.juegoActual.identi,"titulo": $scope.juegoActual.titulo,"nivel": $scope.juegoActual.nivel,"puntuacion": 0,"estado": 0,"correctas": 0,"incorrectas": 0,"ultimoUso": time}}

                    $http({
                      method: 'POST',
                      url: '/createGame',
                      data: $scope.newJuego,
                      headers : {'Accept' : 'application/json'}
                  }).then(function successCallback(response) {

                  }) ;


          }, function errorCallback(response) {
            console.log("not succes");
          });

       } else {
         $scope.nivel = 0;
         $scope.thisUser.matematicas.forEach(function(actualUser) {

             if (actualUser.juego.estado == 0) {

               if ($scope.nivel < actualUser.juego.nivel) {
                 $scope.nivel = actualUser.juego.nivel;
                 $scope.link = actualUser.juego.identi;
                 $scope.tituloJuego = actualUser.juego.titulo;
               }
             }
         });

       }

       if ($scope.thisUser.ingles.length == 0){
         $scope.tituloJuegoing = "Aun no has jugado";
         $scope.linking = "";
         $scope.niveling = "";

         //Recuperamos el juego actual de MongoDB con la ID del juego "identi"
        $http({
          method: 'GET',
          url: '/getIdIngles',
          params: {'id': "juego1"},
          headers : {'Accept' : 'application/json'}
        }).then(function successCallback(response) {
          //Guardamos el "data" del juego seleccionado por el usuario.

              $scope.juegoActualIngles = response.data;

              var time = new Date();
              var hora = time.getHours();
              time.setHours(hora + 2);

              $scope.newJuego = {"juego": {"identi": $scope.juegoActualIngles.identi,"titulo": $scope.juegoActualIngles.titulo,"nivel": $scope.juegoActualIngles.nivel,"puntuacion": 0,"estado": 0,"correctas": 0,"incorrectas": 0,"ultimoUso": time}}

                    $http({
                      method: 'POST',
                      url: '/createIngles',
                      data: $scope.newJuego,
                      headers : {'Accept' : 'application/json'}
                  }).then(function successCallback(response) {
                    //recargamos la informacion actual del usuario.
                  }) ;


          }, function errorCallback(response) {
            console.log("not succes");
          });


       } else {
         $scope.niveling = 0;
         $scope.thisUser.ingles.forEach(function(actualUser) {
             if (actualUser.juego.estado == 0) {

               if ($scope.niveling < actualUser.juego.nivel) {
                 $scope.niveling = actualUser.juego.nivel;
                 $scope.linking = actualUser.juego.identi;
                 $scope.tituloJuegoing = actualUser.juego.titulo;
               }

             }
         });

       }

     })
  }]);
