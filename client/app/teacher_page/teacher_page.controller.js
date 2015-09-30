'use strict';

angular.module('studentqueueApp')
  .controller('TeacherPageCtrl', function ($scope, $resource, $http, $modal, socket) {
    var help_requests = $resource('/api/help_requests/:id?token_id=:token');
    var tokens = $resource('/api/tokens/:id', null, {update: {method: 'PUT'}});
    $scope.password = "";
    $scope.token = new tokens();
    $scope.token.$save();
    $scope.r = {};
    $scope.alerts = []
    $http.get('/api/help_requests').success(function(requests) {
      $scope.requests = requests;
      socket.syncUpdates('help_request', $scope.requests);
    });

    $scope.get_admin = function() {
      console.log($scope.token);
      $scope.token.$update(function() {
        $scope.modalInstance.close();
      }, function() {
        $scope.alerts = [{msg: 'Error authenticatng!'}];
      });
    }

    $scope.adminify = function() {
      $scope.modalInstance = $modal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'app/teacher_page/adminify.html',
        size: 800,
        scope: $scope
      });
    }

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
      help_requests.delete({id: thing._id, token: $scope.token._id});
    }
  });
