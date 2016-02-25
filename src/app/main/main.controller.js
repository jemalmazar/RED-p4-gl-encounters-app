(function() {
  'use strict';

  angular
    .module('red')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $state) {

    $scope.enter = function(e){
      e.preventDefault();
      $state.go('check-in');
    };

  }

})();
