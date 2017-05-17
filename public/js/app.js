'use strict';


angular.module('myApp', [
  'ngRoute',
  'homeModule',
  'profile',
  'matematicas',
  'ingles',
  'puntuacionMatematicas',
  'puntuacionIngles',
  'juego',
  'juegoIngles'

]).factory("UserCurrent", function($http) {

      /* getPopular */
      function getUser(){

        return $http({  method: 'GET',url: '/currentUser'}).then( getResults )
                  //.then( shortenResults )
      }

      return {
        getUser: getUser,
      }
    })

    function getResults(response) {
      console.log(response.data);
      return response.data;
    }

angular.element(document).ready(function(){
  angular.bootstrap(document,['myApp']);
});
