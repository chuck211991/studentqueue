'use strict';

describe('Controller: HelpRequestCtrl', function () {

  // load the controller's module
  beforeEach(module('studentqueueApp'));

  var HelpRequestCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HelpRequestCtrl = $controller('HelpRequestCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
