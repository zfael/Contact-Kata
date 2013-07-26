require('../../node_modules/protractor/jasminewd');

var fs = require('fs');
var util = require('util');
var protractor = require('../../node_modules/protractor/lib/protractor.js');
var ptor = protractor.getInstance();
var timeout = 50000;

describe('Contact-Kata', function() {

    beforeEach(function() {

        ptor.get('http://localhost:3000');
        //ptor.waitForAngular();

     }, 10000);


    it('should display a greeting', function() {

        ptor.findElement(protractor.By.xpath('/html/body/div/p'))
            .getText().then(function(text) {
                expect(text).toEqual('hi! Contacts will fill up here when you have them.');
            });
    }, timeout);


    it('should display the current contacts', function() {

        ptor.findElement(protractor.By.xpath('/html/body/div/ul'))
            .getAttribute('childElementCount').then(function(count) {
                expect(count).toEqual('3');
        });

    }, timeout);


    it('should display Name, Contact informaiton the first contact', function() {
        
        //The following produces an error as documented to be caused by css selectors in markup
        //InvalidElementStateError: invalid element state: SyntaxError: DOM Exception 12
        // ptor.findElement(protractor.By.repeater('person in contacts').row(1))
        //     .findElement(protractor.By.css('li:nth-child[1]'))
        //         .getText().then(function(text) {
        //             expect(text).toEqual('Bluth, Mike');
        //         });

        ptor.findElement(protractor.By.xpath('/html/body/div/ul/li[1]/ul/li[1]'))
            .getText().then(function(text) {
                expect(text).toEqual('Bluth, Michael');
            });

        ptor.findElement(protractor.By.xpath('/html/body/div/ul/li[1]/ul/li[2]'))
            .getText().then(function(text) {
                expect(text).toEqual('mbluth@email.com');
            });

    }, timeout);

    
    it('should display Name, Contact informaiton the second contact', function() {
        
        ptor.findElement(protractor.By.xpath('/html/body/div/ul/li[2]/ul/li[1]'))
            .getText().then(function(text) {
                expect(text).toEqual('Coolperson, Nancy');
            });

        ptor.findElement(protractor.By.xpath('/html/body/div/ul/li[2]/ul/li[2]'))
            .getText().then(function(text) {
                expect(text).toEqual('ncoolperson@email.com');
            });

    }, timeout);


    it('should display Name, Contact informaiton the third contact', function() {
        
        ptor.findElement(protractor.By.xpath('/html/body/div/ul/li[3]/ul/li[1]'))
            .getText().then(function(text) {
                expect(text).toEqual('Doe, John');
            });

        ptor.findElement(protractor.By.xpath('/html/body/div/ul/li[3]/ul/li[2]'))
            .getText().then(function(text) {
                expect(text).toEqual('jdoe@email.com');
            });

    }, timeout);


    it('should present an Add Button', function() {

        ptor.findElement(protractor.By.className('icon-plus'))
            .getText().then(function(text) {
                expect(text).toEqual('');
            });

    }, timeout);

});