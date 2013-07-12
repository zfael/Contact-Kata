require('../../node_modules/protractor/jasminewd');

var fs = require('fs');
var util = require('util');
var protractor = require('../../node_modules/protractor/lib/protractor.js');
var ptor = protractor.getInstance();
var mockServices = fs.readFileSync('test/mocks/mockServices.js').toString();

describe('Kata-Contact', function() {

    // beforeEach(function() {
    //     //ptor.addMockModule('cai.services', mockServices);
    // }, 100000);


    it('should display the current contacts', function() {
        ptor = protractor.getInstance();
        ptor.get('/');

        var contactList = ptor.findElement(protractor.By.repeater('contact in contacts'));
        contactList.getCount().then(function(count) {
          expect(count).toEqual(5);
        });
    }, 10000);


    it('should display Name for the first contact', function() {
        ptor = protractor.getInstance();
        ptor.get('/');

        var contact = ptor.findElement(protractor.By.id('contact_1'));
        contact.findElement(protractor.By.id('name_1')).
          getText().then(function(text) {
            expect(text).toContain('Doe, Jane');
        });
    }, 10000);

    
    it('should display Email Address for the first contact', function() {
        ptor = protractor.getInstance();
        ptor.get('/');

        var contact = ptor.findElement(protractor.By.id('contact_1'));
        contact.findElement(protractor.By.id('email_1')).
          getText().then(function(text) {
            expect(text).toContain('jdoe@gmail.com');
        });
    }, 10000);

});