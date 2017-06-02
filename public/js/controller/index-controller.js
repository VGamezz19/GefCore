angular.module('myApp')
.run(function($rootScope, $http, $q) {


})

.controller('indexController',['$scope','$http', '$rootScope', '$location', function ($scope, $http, $rootScope, $location) {

//========================Cheet.JS==============================================

      cheet('ctrl h', function () {
        window.location.href = "/#!/";
      });

       cheet('ctrl q', function () {
         
         function focusLogOut () {
            document.getElementById('check').focus();
            $('[tabindex=6]').focus();
            $("#check").focus();
          }

        $('.checkModal').modal('show');
        setTimeout(focusLogOut, 300);
          
      });

      cheet('ctrl p', function () {
        window.location.href = "/#!/profile";
      });

      cheet('ctrl m', function () {
        window.location.href = "/#!/matematicas";
      });

      cheet('ctrl i', function () {
        window.location.href = "/#!/ingles";
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
