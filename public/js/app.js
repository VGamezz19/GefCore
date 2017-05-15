'use strict';


angular.module('myApp', [
  'ngRoute',
  'homeModule',
  'profile',
  'matematicas',
  'ingles',
  'puntuacionMatematicas',
  'juego',
  'juegoIngles'
]);

angular.element(document).ready(function(){
  angular.bootstrap(document,['myApp']);
});
