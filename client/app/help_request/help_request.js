'use strict';

angular.module('studentqueueApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('help_request', {
        url: '/help_request',
        templateUrl: 'app/help_request/help_request.html',
        controller: 'HelpRequestCtrl'
      });
  });