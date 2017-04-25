'use strict';


angular.module('myApp', [
  'ngRoute',
  'example',
  'homeModule',
  'matematicas',
  'ingles'
]);

angular.element(document).ready(function(){
  angular.bootstrap(document,['myApp']);
});
