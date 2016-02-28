(function() {
  'use strict';

  angular
    .module('red')
    .controller('EncountersCtrl', EncountersCtrl);

  /** @ngInject */
  function EncountersCtrl($scope, $http, $state, $cookies) {
    var ENCOUNTERS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

    $scope.username = $cookies.getObject('mars_user').name;
    $scope.job = $cookies.getObject('mars_user').job.name;
    $scope.encounters = {};

    $http({
      method: 'GET',
      url: ENCOUNTERS_GET_URL
    }).then(function(response){
        $scope.encounters = response.data.encounters;
    }, function(error){

    });

    $scope.report = function(e){
      $state.go('report');
    };

  }

})();
