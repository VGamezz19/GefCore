'use strict';


angular.module('myApp', [
  'ngRoute',
  'homeModule',
  'profile',
  'matematicas',
  'ingles',
  'puntuacionMatematicas',
  'juego'
]);

angular.element(document).ready(function(){
  angular.bootstrap(document,['myApp']);
});
