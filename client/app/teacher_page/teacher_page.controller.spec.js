'use strict';

describe('Controller: TeacherPageCtrl', function () {

  // load the controller's module
  beforeEach(module('studentqueueApp'));

  var TeacherPageCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeacherPageCtrl = $controller('TeacherPageCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
