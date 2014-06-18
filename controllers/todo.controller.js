'use strict';

angular.module('todoApp').controller('TodoCtrl', ['$scope', 'todoService',  
  function($scope, todoService) {

      var TODOFOLDER = 28;
      var TASKSFOLDER = 13;
    
      $scope.init = function() {
        todoService.readAll($scope);      
      }
  }]);