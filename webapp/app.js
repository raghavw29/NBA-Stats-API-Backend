var app = angular.module('nbaApp', []);
app.controller('myController', function($scope, $http) {
  $scope.data = [];

  $scope.$watch('inRight', function() {
    if ($scope.inRight === 'irving') {
      $scope.rsData = [2,7,52,6,75,1,88,5];
      $scope.rsShow = true;
    } else {
      $scope.rsShow = false;
      $scope.rsData = [];
    }
  });
  $scope.$watch('inLeft', function() {
    if ($scope.inLeft === 'curry') {
      $scope.lsData = [4,18,1,93,6,43,2,3];
      $scope.lsShow = true;
    } else {
      $scope.lsData = [];
      $scope.lsShow = false;
    }
  });


})
