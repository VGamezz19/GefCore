


  angular.module('matematicas').controller('matematicasController',['$scope', function ($scope) {
      this.hello = 'Hola. soy el componente testText';
      this.suma = 2 +5;
      $scope.test = "soy de la template test-text";
    }]);

//module('testText').controller('testController',['$scope', function ($scope) {
//para pasarle el $scope
