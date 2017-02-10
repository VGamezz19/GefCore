'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.module('testText2').
  component('testText2', {
    templateUrl: '/js/components/testText2/testText2-template.html',
    controller: 'testController2'

      // Para hacer una peticion http a un fichero de nuestro proyecto
      // y obtener sus datos. En este caso un JSON
      // (Solo estara contemplado en este componente)
      //____________________________________________________________
      //$http.get('phones/phones.json').then(function(response) {
      //  this.phones = response.data;
      //});

  })
