  'use strict';

angular.module('myApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<h1>Testing ng-view ANGULAR / </h1>'
        }).
        //  when('/test/:phoneId'
        when('/test', {
          template: '<test-text></test-text>'
        }).
        otherwise('/');
    }
  ]);
