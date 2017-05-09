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
           $scope.jugandose = response.data;

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
                   if (identUser.juego.identi == $scope.jugandose.identi) {
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
             $scope.newJuego = {"juego": {"identi": $scope.jugandose.identi,"titulo": $scope.jugandose.titulo,"nivel": $scope.jugandose.nivel,"puntuacion": 0,"estado": 0,"correctas": 0,"incorrectas": 0,"ultimoUso": time}}
               console.log($scope.newJuego);
                   $http({
                     method: 'POST',
                     url: '/updateGame',
                     data: $scope.newJuego,
                     headers : {'Accept' : 'application/json'}
                 }).then(function successCallback(response) {
                     console.log("has entrado a un nuevo juego");
                 }) ;
           } else {
             console.log("Ya has jugado a este juego");
           }

           //Load Preguntas
           console.log("holaquetal");
           $http({
             method: 'GET',
             url: '/preguntasMates',
             params: {'id': id},
             headers : {'Accept' : 'application/json'}
           }).then(function successCallback(response) {
             console.log("response");
             console.log(response);
             }, function errorCallback(response) {
               console.log(response);
            });


       }, function errorCallback(response) {

       });



       $scope.inputsPreguntas = ["","","","",""];

       $scope.uploadGame = function() {
          console.log($scope.inputsPreguntas);
          var errores;

          for (var i = 0; i < $scope.inputsPreguntas.length; i++) {
              //if ($scope.inputsPreguntas[i] ===)
          }
       }



  }]);
