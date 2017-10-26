'use strict';

angular.
  module('nbaApp').
    component('base', {
      templateUrl: 'webapp/table-cont.html',
      controller: ['$routeParams', 'base',
        function PhoneDetailController($routeParams, Phone) {
          var self = this;
          self.testVar = "Testing";
        }]
    })
