  'use strict';

angular.module('myApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $routeProvider.eagerInstantiationEnabled(true);
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<home-component></home-component>'
        }).
        //  when('/test/:phoneId'
        when('/matematicas', {
          template: '<matematicas-component></matematicas-component>'
        }).
        when('/ingle', {
          template: '<ingles-component></ingles-component>'
        }).
        when('/profile', {
          template: '<profile-component/>'
        }).
        when('/ingles', {
          template: '<ingles-component></ingles-component>'
        }).
        when('/juego/:ID', {
          template: '<juego-component></juego-component>'

        }).
        when('/juegoIngles/:ID', {
          template: '<juego-ingles-component></juego-ingles-component>'

        }).
        when('/puntuacionMatematicas', {
          template: '<puntuacion-matematicas-component></puntuacion-matematicas-component>'
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
