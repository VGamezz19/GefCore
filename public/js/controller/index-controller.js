angular.module('myApp')
.run(function($rootScope, $http, $q) {


})

.controller('indexController',['$scope','$http', '$rootScope', function ($scope, $http, $rootScope) {

$scope.prueba = {email: "alejandro.urdiales.93@gmail.com", nombre: "alejandro"};
$http({
     method: 'POST',
     url: '/email',
     data: $scope.prueba,
     headers : {'Accept' : 'application/json'}
   }).then(function successCallback(response) {
     //Guardamos el "data" del juego seleccionado por el usuario.
         

     }, function errorCallback(response) {

     });

//=========================Nav Jquery Efect=====================================
      $("#ngView").removeClass("addMarginTopView");

      $(".nav li a")
      //Focus con tab
      .focus(function () {
        $(this).parent().addClass("barrita-nomas");
      })
      //Quitando focus tab
      .focusout(function () {
        $(this).parent().removeClass("barrita-nomas");
      })
      //hover raton
      .hover(function () {
        $(this).parent().addClass("barrita-nomas");
      })
      //quitando hover raton
      .mouseleave(function () {
        $(this).parent().removeClass("barrita-nomas");
      });

  }]);
