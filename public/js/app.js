'use strict';


angular.module('myApp', [
  'ngRoute',
  'example',
  'homeModule',
  'profile',
  'matematicas',
  'ingles',
  'puntuacionMatematicas'
]);

angular.element(document).ready(function(){
  angular.bootstrap(document,['myApp']);
});
