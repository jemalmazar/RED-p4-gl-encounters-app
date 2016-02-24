(function() {
  'use strict';

  angular
    .module('red')
    .controller('CheckInCtrl', CheckInCtrl);

  /** @ngInject */
  function CheckInCtrl($scope, $http) {
    var JOBS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';
    var COLONIST_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';
    // placeholder object for POST request to /colonists
    $scope.colonist = {};
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

      $http({
        method: 'POST',
        url: COLONIST_POST_URL,
        data: {
          'colonist': $scope.colonist
        }
      }).then(function(response){
        console.log(response);
      }, function(error){
        console.log(error);
      });
    };

  }

})();
