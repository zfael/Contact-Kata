'use strict';

describe('Controller: MyCtrl2', function () {

    // load the controller's module
    beforeEach(module('ckControllers'));

    var MainCtrl,
        scope,
        expect = chai.expect;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MyCtrl2', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.contacts.length).to.equal(3);
    });
});
