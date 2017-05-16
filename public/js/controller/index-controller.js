angular.module('myApp')
.run(function($rootScope, $http, $q) {
  $rootScope.trueFalse = false;
    //=============================currentUser ===================================


    $rootScope.currentUser = function(){
      //$rootScope.thisUser;
      //console.log($rootScope.thisUser);
      $http({
        method: 'GET',
        url: '/currentUser'
      }).then(function successCallback(response) {

          $rootScope.thisUser = response.data;
          $rootScope.trueFalse = true;
          console.log($rootScope.thisUser);

        }, function errorCallback(response) {
          $rootScope.trueFalse = false;
          return false;
            console.log("error");
        });
    }

    $rootScope.currentUser();

})

.controller('indexController',['$scope','$http', '$rootScope', function ($scope, $http, $rootScope) {
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
