'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.module('profile').
  component('profileComponent', {
    templateUrl: '/js/components/profile/profile-template.html',
    controller: 'profileController'


  })
