'use strict';


angular.module('myApp', [
  'ngRoute',
  'testText',
  'testText2',
  'example',
  'login'
]);

angular.element(document).ready(function(){
  angular.bootstrap(document,['myApp']);
});
