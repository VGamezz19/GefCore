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
          template: '<test-text></test-text> <test-text2></test-text2>'
        }).
        when('/mongoose', {
          template: '<test-mongoose></test-mongoose>'
        }).
        otherwise('/');
    }
  ]);
