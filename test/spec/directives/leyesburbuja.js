'use strict';

describe('Directive: leyesBurbuja', function () {

  // load the directive's module
  beforeEach(module('leyesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<leyes-burbuja></leyes-burbuja>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the leyesBurbuja directive');
  }));
});
