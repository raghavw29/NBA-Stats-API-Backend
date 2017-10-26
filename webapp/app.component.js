'use strict';

angular.
  module('nbaApp').
    component('base', {
      templateUrl: 'webapp/table-cont.html',
      controller: ['$routeParams', 'base',
        function PhoneDetailController($routeParams, Phone) {
          var self = this;
          self.testVar = "Testing";
          console.log("attempting http req");
          var request = $http.get('/data');
          request.success(function(data) {
            $scope.data = data;
            console.log(data);
          });
          request.error(function(data) {
            console.log('Error: ' + data);
          })
        }]
    })
