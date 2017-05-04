angular.module('myApp')
.run(function($rootScope, $http) {

    //=============================currentUser ===================================
          $http({
            method: 'GET',
            url: '/currentUser'
          }).then(function successCallback(response) {
                console.log(response.data);
                $rootScope.currentUser = response.data;

            }, function errorCallback(response) {
              console.log($rootScope.currentUser);
              $rootScope.currentUser;
                console.log("error");
            });
})

.controller('indexController',['$scope','$http', '$rootScope', function ($scope, $http, $rootScope) {
//=========================Nav Jquery Efect=====================================
      $("#ngView").removeClass("addMarginTopView");

      $(".nav li a")
      //Focus con tab
      .focus(function () {
        console.log("holaFocusyHoover");
        $(this).parent().addClass("barrita-nomas");
      })
      //Quitando focus tab
      .focusout(function () {
        console.log("holaFocusyHoover");
        $(this).parent().removeClass("barrita-nomas");
      })
      //hover raton
      .hover(function () {
        console.log("holaFocusyHoover");
        $(this).parent().addClass("barrita-nomas");
      })
      //quitando hover raton
      .mouseleave(function () {
        console.log("holaFocusyHoover");
        $(this).parent().removeClass("barrita-nomas");
      });



  }]);
