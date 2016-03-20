(function() {
  'use strict';

  angular
    .module('red')
    .controller('CheckInCtrl', CheckInCtrl);

  /** @ngInject */
  function CheckInCtrl($scope, $state, $cookies, apiFactory) {
    // placeholder object for POST request to /colonists
    $scope.colonist = {};
    $scope.taskValidate = false;
    // fetch jobs data from API
    apiFactory
    .getJobs()
    .then(function(response){
      $scope.joblist = response.data.jobs;
    });

    $scope.login = function(e){
      e.preventDefault();

      if(!$scope.checkInForm.$invalid){
        apiFactory
        .postColonist($scope.colonist)
        .then(function(response){
          $cookies.putObject('mars_user', response.data.colonist);
          $state.go('encounters');
        });
      } else {
        $scope.taskValidate = true;
      }
    };

  }

})();
