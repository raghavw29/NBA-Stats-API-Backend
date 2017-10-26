'use strict';

angular.
  module('nbaApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/test', {
          template: '<table-cont></table-cont>'
        }).otherwise('/');
    }
  ]);
