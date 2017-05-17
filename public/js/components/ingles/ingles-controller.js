


  angular.module('ingles').controller('inglesController',['$scope', '$rootScope','$http', '$location', 'UserCurrent', function ($scope, $rootScope, $http, $location, UserCurrent) {
    $("#ngView").addClass("addMarginTopView");
    $(".container-fluid").hide();

UserCurrent.getUser()
   .then( function(user) {
     $scope.thisUser = user
   })

//==============================================================================
if (!$scope.thisUser) {
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

    console.log($rscope.thisUser.puntuacion);
    this.puntuacionMaxima = $scope.thisUser.puntuacion.ingles;
/* //Le pasamos la puntuacion maxima de matematicas del usuario conectado a la Template.


   for (var i = 0; i < matematicas.length; i++) {
     if this.puntuacionMaxima > matematicas[i].puntuacionTotal {

     }
   }
 */




}}]);
