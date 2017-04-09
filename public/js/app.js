'use strict';


angular.module('myApp', [
  'ngRoute',
  'testText',
  'testText2',
  'example'
]);

angular.element(document).ready(function(){
  angular.bootstrap(document,['myApp']);
});
