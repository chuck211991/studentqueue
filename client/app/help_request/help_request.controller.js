'use strict';

angular.module('studentqueueApp')
  .controller('HelpRequestCtrl', function ($scope, $resource, $http, socket) {
    var help_requests = $resource('/api/help_requests/:id');
    $scope.r = {};
    $http.get('/api/help_requests').success(function(requests) {
      $scope.requests = requests;
      socket.syncUpdates('help_request', $scope.requests);
    });

    $scope.get_help = function() {
      console.log("Here");
      var request = new help_requests({
          name: $scope.r.name,
          purpose: $scope.r.type,
          open: true,
      });
      request.$save();

      $scope.r = {};
    }

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('help_request');
    });

    $scope.finished = function(thing) {
      help_requests.delete({id: thing._id});
    }
  });
