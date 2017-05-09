  angular.module('matematicas').controller('matematicasController',['$scope', '$rootScope','$http', '$location', function ($scope, $rootScope, $http, $location) {
    $("#ngView").addClass("addMarginTopView");
    $(".container-fluid").hide();


//==============================================================================
if (!$rootScope.thisUser) {
  $location.path( "/" );
} else {

  $http({
    method: 'GET',
    url: '/getAllMates'
  }).then(function successCallback(response) {

        $scope.matematicas = response.data;
        console.log($scope.matematicas);

    }, function errorCallback(response) {

    });

    console.log($rootScope.thisUser.puntuacion);

 //Le pasamos la puntuacion maxima de matematicas del usuario conectado a la Template.
   this.puntuacionMaxima = $rootScope.thisUser.puntuacion.matematicas;





}}]);
