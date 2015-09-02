'use strict';

angular.module('studentqueueApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('help_request', {
        url: '/',
        templateUrl: 'app/help_request/help_request.html',
        controller: 'HelpRequestCtrl'
      });
  });