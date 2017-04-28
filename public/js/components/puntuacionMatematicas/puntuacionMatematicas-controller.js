


  angular.module('puntuacionMatematicas').controller('puntuacionMatematicasController',['$scope', function ($scope) {

      var jsonObject ='{ "usuarios" : [' +
                                      '{ "name":"pedro" , "puntuacionTotal":200, "NivelActual" : "2" },' +
                                      '{ "name":"juan" , "puntuacionTotal":400, "NivelActual" : "4" },' +
                                      '{ "name":"jooLoco" , "puntuacionTotal":233, "NivelActual" : "2" },' +
                                      '{ "name":"qpasaSurmano" , "puntuacionTotal":1500, "NivelActual" : "10" },' +
                                      '{ "name":"blaleBli" , "puntuacionTotal":455, "NivelActual" : "5" },' +
                                      '{ "name":" aqBli" , "puntuacionTotal":786, "NivelActual" : "7" },' +
                                      '{ "name":"DandoGas" , "puntuacionTotal":566, "NivelActual" : "5" },' +
                                      '{ "name":"ElmasPuto" , "puntuacionTotal":345, "NivelActual" : "3" },' +
                                      '{ "name":"tengpProblemas" , "puntuacionTotal":788, "NivelActual" : "7" },' +
                                      '{ "name":"soyanormal" , "puntuacionTotal":1509, "NivelActual" : "10" } ]}';

      $scope.puntuacion = JSON.parse(jsonObject);


      $(".container-fluid").hide();
      setTimeout(function(){
         $("#tag0").append("<span class='fi glyphicon glyphicon-star primeraPuntuacion'></span>");
         $("#tag1").append("<span class='fi glyphicon glyphicon-star segundaPuntuacion'></span>");
         $("#tag2").append("<span class='fi glyphicon glyphicon-star terceraPuntuacion'></span>");
      }, 0)

    }]);

//module('testText').controller('testController',['$scope', function ($scope) {
//para pasarle el $scope
