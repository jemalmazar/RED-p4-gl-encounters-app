(function() {
  'use strict';

  angular
    .module('red')
    .controller('CheckInCtrl', CheckInCtrl);

  /** @ngInject */
  function CheckInCtrl($scope, $http, $rootScope, $state, $cookies) {
    var JOBS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';
    var COLONIST_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';
    // placeholder object for POST request to /colonists
    $scope.colonist = {};
    $scope.taskValidate = false;
    // fetch jobs data from API
    $http({
      method: 'GET',
      url: JOBS_GET_URL
    }).then(function(response){
        $scope.joblist = response.data.jobs;
    }, function(error){
        //
    });

    $scope.login = function(e){
      e.preventDefault();

      if(!$scope.checkInForm.$invalid){
        console.log('posted');
        $http({
          method: 'POST',
          url: COLONIST_POST_URL,
          data: { 'colonist': $scope.colonist }
        }).then(function(response){

          $cookies.putObject('mars_user', response.data.colonist);
          $state.go('encounters');

        }, function(error){
          console.log(error);
        });
      } else {
        $scope.taskValidate = true;
      }

    };

  }

})();
