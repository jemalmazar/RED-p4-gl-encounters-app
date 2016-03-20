(function() {
  'use strict';

  angular
    .module('red')
    .controller('EncountersCtrl', EncountersCtrl);

  /** @ngInject */
  function EncountersCtrl($scope, $state, $cookies, apiFactory) {

    $scope.username = $cookies.getObject('mars_user').name;
    $scope.job = $cookies.getObject('mars_user').job.name;
    $scope.encounters = {};

    apiFactory
    .getEncounters()
    .then(function(response){
        $scope.encounters = response.data.encounters;
    });

    $scope.report = function(e){
      $state.go('report');
    };

  }

})();
