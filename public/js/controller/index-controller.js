angular.module('myApp').controller('indexController',['$scope', function ($scope) {
//=========================Nav Jquery Efect=====================================
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
