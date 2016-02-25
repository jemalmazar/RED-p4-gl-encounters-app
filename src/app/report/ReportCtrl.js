(function() {
  'use strict';

  angular
    .module('red')
    .controller('ReportCtrl', ReportCtrl);

  /** @ngInject */
  function ReportCtrl($scope, $http, $rootScope, $cookies, $filter, $state) {
    var ALIENS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
    var REPORT_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

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

      $http({
        method: 'POST',
        url: REPORT_POST_URL,
        data: { 'encounter' : $scope.report }
      }).then(function(response){
        console.log($scope.report);
        $state.go('encounters');
      });

    };

  }

})();
