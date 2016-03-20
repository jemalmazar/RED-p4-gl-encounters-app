(function() {
  'use strict';

  angular
    .module('red')
    .factory('apiFactory', apiFactory);

  function apiFactory($http){
    var JOBS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';
    var COLONIST_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';
    var ENCOUNTERS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';
    var ALIENS_GET_URL = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
    var REPORT_POST_URL = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

    return {

      getJobs: function httpGET() {
        return $http({
          method: 'GET',
          url: JOBS_GET_URL
          });
      },

      postColonist: function httpPOST(colonist) {
        return $http({
          method: 'POST',
          url: COLONIST_POST_URL,
          data: { 'colonist': colonist }
        });
      },

      getEncounters: function httpGET() {
        return $http({
          method: 'GET',
          url: ENCOUNTERS_GET_URL
        });
      },

      getAliens: function httpGET() {
        return $http({
          method: 'GET',
          url: ALIENS_GET_URL
        });
      },

      postReport: function httpPOST(report) {
        return $http({
            method: 'POST',
            url: REPORT_POST_URL,
            data: { 'encounter' : report }
        });
      }

    };
  }

})();
