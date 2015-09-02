'use strict';

angular.module('studentqueueApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teacher_page', {
        url: '/teacher_page',
        templateUrl: 'app/teacher_page/teacher_page.html',
        controller: 'TeacherPageCtrl'
      });
  });