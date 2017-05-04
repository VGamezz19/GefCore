  angular.module('matematicas').controller('matematicasController',['$scope', '$rootScope','$http', '$location', function ($scope, $rootScope, $http, $location) {
    $("#ngView").addClass("addMarginTopView");
    $(".container-fluid").hide();


    setTimeout(function(){
        $(".spanFlotando").hide();

        $(".matematicasHome")
        //hover raton
        .hover(function () {
          $(this).find(".spanFlotando").show();
        })
        //quitando hover raton
        .mouseleave(function () {
          $(this).find(".spanFlotando").hide();
        });

     }, 30);

//==============================================================================
if (!$rootScope.currentUser) {
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

 //Le pasamos la puntuacion maxima de matematicas del usuario conectado a la Template.
   this.puntuacionMaxima = $rootScope.currentUser.puntuacion.matematicas;




   /*$scope.matematicas.forEach(function(nivelesMatematicas) {
     this.matematicasController.push(nivelesMatematicas);
   }); */

}}]);
