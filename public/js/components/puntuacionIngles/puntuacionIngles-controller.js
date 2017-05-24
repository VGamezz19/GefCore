


  angular.module('puntuacionIngles').controller('puntuacionInglesController',['$scope','$http', function ($scope, $http) {
    $scope.nivelesUsers = [];

      $http({
        method:'GET',
        url:'/getAll'
      }).then(function successCallback(response){
        $scope.usuarioCompleto = response.data;
        console.log($scope.usuarioCompleto);
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
