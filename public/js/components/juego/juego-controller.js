  angular.module('juego').controller('juegoController',['$scope','$http','$rootScope','$routeParams', function ($scope,$http,$rootScope, $routeParams) {

    var id = $routeParams.ID;
    console.log(id);

    $http({
      method: 'GET',
      url: '/getIdMates',
      params: {id: 'juego1'}
    }).then(function successCallback(response) {
          console.log(response.data);

      }, function errorCallback(response) {

      });

  }]);
