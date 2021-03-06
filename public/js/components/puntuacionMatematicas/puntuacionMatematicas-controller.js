


  angular.module('puntuacionMatematicas').controller('puntuacionMatematicasController',['$scope','$http','UserCurrent', function ($scope, $http, UserCurrent) {
    $scope.nivelesUsers = [];

      $http({
        method:'GET',
        url:'/getAll'
      }).then(function successCallback(response){
         //Factory Actual Usaer
        UserCurrent.getUser().then(function (user) {
          $scope.actualUser = user
        })

        //Scope All Users in this aplication.
        $scope.usuarioCompleto = response.data;
        $scope.usuarioCompleto.forEach(function(usuario) {
          var cnt = 0;
            usuario.matematicas.forEach(function(nivel) {
                cnt = cnt + 1;
            });

            usuario['juegoActual'] = cnt;
        });

        $(".container-fluid").hide();
        setTimeout(function(){
           $("#tag0").append("<span class='fi glyphicon glyphicon-star primeraPuntuacion hidden-xs hidden-sm'></span>");
           $("#tag1").append("<span class='fi glyphicon glyphicon-star segundaPuntuacion hidden-xs hidden-sm'></span>");
           $("#tag2").append("<span class='fi glyphicon glyphicon-star terceraPuntuacion hidden-xs hidden-sm'></span>");
        }, 100)

      });




    }]);

//module('testText').controller('testController',['$scope', function ($scope) {
//para pasarle el $scope
