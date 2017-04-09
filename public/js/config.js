  'use strict';

angular.module('myApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          templateUrl: '/template/main-template.html',
          template: '<login-component></login-component>'
        }).
        //  when('/test/:phoneId'
        when('/test', {
          template: '<test-text></test-text> <test-text2></test-text2>'
        }).
        when('/mongoose', {
          template: '<test-mongoose-component></test-mongoose-component>'
        }).
        otherwise({
          redirectTo: '/'
        });
        // use the HTML5 History API
        //esto es para quitar el #/ de la ruta
        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
    }
  ]);
