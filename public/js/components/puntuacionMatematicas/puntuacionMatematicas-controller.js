


  angular.module('puntuacionMatematicas').controller('puntuacionMatematicasController',['$scope','$http', function ($scope, $http) {

      $http({
        method:'GET',
        url:'/getAll'
      }).then(function successCallback(response){
        $scope.usuarioCompleto = response.data;
        console.log(response.data[0].username);
      });


      $(".container-fluid").hide();
      setTimeout(function(){
         $("#tag0").append("<span class='fi glyphicon glyphicon-star primeraPuntuacion'></span>");
         $("#tag1").append("<span class='fi glyphicon glyphicon-star segundaPuntuacion'></span>");
         $("#tag2").append("<span class='fi glyphicon glyphicon-star terceraPuntuacion'></span>");
      }, 0)

    }]);

//module('testText').controller('testController',['$scope', function ($scope) {
//para pasarle el $scope
