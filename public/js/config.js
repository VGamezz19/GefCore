  'use strict';

angular.module('myApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<home-component></home-component>'
        }).
        //  when('/test/:phoneId'
        when('/matematicas', {
          template: '<matematicas-component></matematicas-component>'
        }).
        when('/profile', {
          template: '<profile-component/>'
        }).
        when('/ingles', {
          template: '<ingles-component></ingles-component>'
        }).
        when('/puntuacionMatematicas', {
          template: '<puntuacion-matematicas-component></puntuacion-matematicas-component>'
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
