(function() {
  'use strict';

  angular
    .module('red')
    .controller('ReportCtrl', ReportCtrl);

  /** @ngInject */
  function ReportCtrl($scope, $http, $rootScope, $cookies, $filter, $state) {
    var ALIENS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
    var REPORT_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

    $scope.username = $cookies.getObject('mars_user').name;
    $scope.job = $cookies.getObject('mars_user').job.name;
    $scope.report = {
      colonist_id: $cookies.getObject('mars_user').id,
      date: $filter('date')(new Date(), 'yyyy-MM-dd')
    };

    $http({
      method: 'GET',
      url: ALIENS_GET_URL
    }).then(function(response){
        $scope.alienlist = response.data.aliens;
    }, function(error){

    });

    $scope.submit = function(e){
      e.preventDefault();

      if(!$scope.reportForm.$invalid) {
        $http({
          method: 'POST',
          url: REPORT_POST_URL,
          data: { 'encounter' : $scope.report }
        }).then(function(response){

          $state.go('encounters');
        });
      } else {
        $scope.taskValidate = true;
      }


    };

  }

})();
