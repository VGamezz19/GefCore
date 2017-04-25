


  angular.module('matematicas').controller('matematicasController',['$scope', function ($scope) {
      this.hello = 'Hola. soy el componente testText';
      this.suma = 2 +5;
      $scope.test = "soy de la template test-text";

      $scope.matesGamez= []

      var jsonObject = '{ "matematicas" : [' +
                      '{ "game":"Suma sin problemas" , "deficultad":"1", "Puntuacion" : "50" },' +
                      '{ "game":"Resta a ver si puedes" , "deficultad":"2", "Puntuacion" : "150" },' +
                      '{ "game":"Suma y resta parasd s" , "deficultad":"3", "Puntuacion" : "250" },' +
                      '{ "game":"bla bla bla bie" , "deficultad":"4", "Puntuacion" : "350" },' +
                      '{ "game":"asd asd asdsads asd " , "deficultad":"5", "Puntuacion" : "450" },' +
                      '{ "game":" asds dad asdas das dsda " , "deficultad":"6", "Puntuacion" : "550" },' +
                      '{ "game":" ads ads dasds dad as" , "deficultad":"7", "Puntuacion" : "650" },' +
                      '{ "game":" asdsa dasdas das asd as" , "deficultad":"8", "Puntuacion" : "750" },' +
                      '{ "game":" ads dasds dasd asd" , "deficultad":"9", "Puntuacion" : "850" },' +
                      '{ "game":" asdsa dasd sds d asdas as" , "deficultad":"10", "Puntuacion" : "950" } ]}';


      $scope.matesGames = JSON.parse(jsonObject);
    }]);

//module('testText').controller('testController',['$scope', function ($scope) {
//para pasarle el $scope
