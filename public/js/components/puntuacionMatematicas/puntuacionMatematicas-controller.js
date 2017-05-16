


  angular.module('puntuacionMatematicas').controller('puntuacionMatematicasController',['$scope','$http', function ($scope, $http) {
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
          $scope.nivelesUsers.push(cnt);
        });

      });


      $(".container-fluid").hide();
      setTimeout(function(){
         $("#tag0").append("<span class='fi glyphicon glyphicon-star primeraPuntuacion'></span>");
         $("#tag1").append("<span class='fi glyphicon glyphicon-star segundaPuntuacion'></span>");
         $("#tag2").append("<span class='fi glyphicon glyphicon-star terceraPuntuacion'></span>");
      }, 100)

    }]);

//module('testText').controller('testController',['$scope', function ($scope) {
//para pasarle el $scope
