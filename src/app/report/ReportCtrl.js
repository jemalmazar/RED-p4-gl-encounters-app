(function() {
  'use strict';

  angular
    .module('red')
    .controller('ReportCtrl', ReportCtrl);

  /** @ngInject */
  function ReportCtrl($scope, $cookies, $filter, $state, apiFactory) {

    $scope.username = $cookies.getObject('mars_user').name;
    $scope.job = $cookies.getObject('mars_user').job.name;
    $scope.report = {
      colonist_id: $cookies.getObject('mars_user').id,
      date: $filter('date')(new Date(), 'yyyy-MM-dd')
    };

    apiFactory
    .getAliens()
    .then(function(response){
      $scope.alienlist = response.data.aliens;
    });

    $scope.submit = function(e){
      e.preventDefault();

      if(!$scope.reportForm.$invalid) {
        apiFactory
        .postReport($scope.report)
        .then(function(response){
          $state.go('encounters');
        });
      } else {
        $scope.taskValidate = true;
      }


    };

  }

})();
