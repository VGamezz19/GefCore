  angular.module('matematicas').controller('matematicasController',['$scope', function ($scope) {
    $("#ngView").addClass("addMarginTopView");
    $(".container-fluid").hide();

      //========================================================================
      //Peticion GET de toda la coleccion Matematicas
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
      this.matesGames = JSON.parse(jsonObject);

      //========================================================================
      //Peticion GET de toda la informacion del Usuario Conectado

      var jsonObjectUser = '{"usuario": [{"username": "vgamez","firstname": "victor",'  +
      '"lastname": "gamez","email": "pictor.games@gmail.com","puntuacion": {"mates": 1000,"ingles": 0},' +
      '"matematicas": [{"juego": {"titulo": "suma se puedes 1","puntos": 100,"estado": 1}},{"juego": {' +
				'"titulo": "suma se puedes 2","puntos": 100,"estado": 1}},{"juego": {"titulo": "suma se puedes 3",'+
				'"puntos": 100,"estado": 0}}],"ingles": {"juego1": {"titulo": "hello 1","puntos": 100,"estado": 1},'+
			'"juego2": {"titulo": "hello 2","puntos": 100,"estado": 1	},"juego3": {"titulo": "hello 3","puntos": 100,' +
				'"estado": 0}}}]}';
      var usuario = JSON.parse(jsonObjectUser);


      this.puntuacionMaxima = 10000;


    }]);

//module('testText').controller('testController',['$scope', function ($scope) {
//para pasarle el $scope
