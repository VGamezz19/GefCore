


  angular.module('ingles').controller('inglesController',['$scope', '$rootScope','$http', '$location', function ($scope, $rootScope, $http, $location) {
    $("#ngView").addClass("addMarginTopView");
    $(".container-fluid").hide();


//==============================================================================
if (!$rootScope.thisUser) {
  $location.path( "/" );
} else {

  $http({
    method: 'GET',
    url: '/getAllIngles'
  }).then(function successCallback(response) {

        $scope.matematicas = response.data;
        console.log($scope.matematicas);

    }, function errorCallback(response) {

    });

    console.log($rootScope.thisUser.puntuacion);
    this.puntuacionMaxima = $rootScope.thisUser.puntuacion.ingles;
/* //Le pasamos la puntuacion maxima de matematicas del usuario conectado a la Template.


   for (var i = 0; i < matematicas.length; i++) {
     if this.puntuacionMaxima > matematicas[i].puntuacionTotal {

     }
   }
 */




}}]);
