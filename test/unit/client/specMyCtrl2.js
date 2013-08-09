'use strict';

describe('Controller: MyCtrl2', function () {
    var mocks = {
        contacts: [
            {id: 0, first: 'John', last: 'Doe', email: 'jdoe@email.com'},
            {id: 1, first: 'Nancy', last: 'Coolperson', email: 'ncoolperson@email.com'},
            {id: 2, first: 'Michael', last: 'Bluth', email: 'mbluth@email.com'}
        ]
    }


    // load the controller's module
    beforeEach(module('ckControllers'));

    var MainCtrl,
        scope,
        expect = chai.expect;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MyCtrl2', {$scope: scope });

        $rootScope.uid = (function edit() { return (Math.floor(Math.random()*mocks.contacts.length)) }()) ;
        $rootScope.contacts = mocks.contacts;
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.contacts.length).to.equal(3);
    });

    it('should have an edit method', function () {
        expect(scope.save).exist;
    });

    it('add conatct', function () {
        scope.first = "Test";
        scope.last = "Runnmer";
        scope.email = "test@runner.com";

        scope.save();

        expect(scope.contacts.length).to.equal(4);

        expect(scope.contacts[3].first).to.equal("Test");
        expect(scope.contacts[3].last).to.equal("Runnmer");
        expect(scope.contacts[3].email).to.equal("test@runner.com");
    });

    it('should have an del method', function () {
        expect(scope.delete).exist;
    });

    it('should remove one', function () {
        var contact = {id: 0, first: 'John', last: 'Doe', email: 'jdoe@email.com'},
            index  = scope.contacts.indexOf(contact);

        scope.delete();

        expect(scope.contacts.length).to.equal(3);

        expect(index).to.equal(-1);
    });


    it('should edit an exiting contact', function () {
        var contact = {id: 1, first: 'Nancy', last: 'Coolperson', email: 'ncoolperson@email.com'};

        scope.contacts[scope.uid].first = "Joe";
        scope.contacts[scope.uid].last = "Smith";
        scope.contacts[scope.uid].email = "Joe Msith@";

        scope.save();

        expect(scope.contacts[scope.uid].first).to.equal('Joe');

    });
});
