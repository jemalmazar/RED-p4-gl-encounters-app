(function() {
  'use strict';

  angular
    .module('red')
    .controller('CheckInCtrl', CheckInCtrl);

  /** @ngInject */
  function CheckInCtrl($scope) {
      this.online = true;
  }

})();
