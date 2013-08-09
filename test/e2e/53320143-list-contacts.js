require('../../node_modules/protractor/jasminewd');

var fs = require('fs');
var util = require('util');
var protractor = require('../../node_modules/protractor/lib/protractor.js');
var ptor = protractor.getInstance();
var timeout = 50000;

describe('Contact-Kata', function() {

    beforeEach(function() {

        ptor.get('http://localhost:3000');
        ptor.waitForAngular();

     }, 10000);


    it('should display the current contacts', function() {

        ptor.findElement(protractor.By.className('navbar-inner'))
            .getText().then(function(text) {
                expect(text).toEqual('Contact List');
            })

        ptor.findElement(protractor.By.className('nav-stacked'))
            .getAttribute('childElementCount').then(function(count) {
                expect(count).toEqual('3');
        });

    }, timeout);


    it('should display Name, Contact informaiton the first contact', function() {

        var contact = ptor.findElement(protractor.By.repeater("person in contacts | orderBy:'last'").row(1));
        verifyContact(contact, 'Bluth, Michael', 'mbluth@email.com')

    }, timeout);


    it('should display Name, Contact informaiton the second contact', function() {

        var contact = ptor.findElement(protractor.By.repeater("person in contacts | orderBy:'last'").row(2));
        verifyContact(contact, 'Coolperson, Nancy', 'ncoolperson@email.com')

    }, timeout);


    it('should display Name, Contact informaiton the third contact', function() {

        var contact = ptor.findElement(protractor.By.repeater("person in contacts | orderBy:'last'").row(3));
        verifyContact(contact, 'Doe, John', 'jdoe@email.com')

    }, timeout);


    it('should present an Add Button', function() {

        ptor.findElement(protractor.By.className('icon-plus'))
            .getText().then(function(text) {
                expect(text).toEqual('');
            });

    }, timeout);

});

function verifyContact(contact, name, email) {

    contact.findElement(protractor.By.id('name_id'))
        .getText().then(function(text) {
            expect(text).toEqual(name);
        });

    contact.findElement(protractor.By.id('email_id'))
        .getText().then(function(text) {
            expect(text).toEqual(email);
        });
}