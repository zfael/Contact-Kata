require('../../node_modules/protractor/jasminewd');

var fs = require('fs');
var util = require('util');
var protractor = require('../../node_modules/protractor/lib/protractor.js');
var ptor = protractor.getInstance();
var timeout = 10000;

describe('ability to add a contact ', function() {

    beforeEach(function() {

        ptor.get('http://localhost:3000');

     }, timeout);

    it('should display initial list of contacts', function() {

        ptor.findElement(protractor.By.className('nav-stacked'))
            .getAttribute('childElementCount').then(function(count) {
                expect(count).toEqual('3');
        });

    }, timeout); 
	
	
	it('should be able to add a contact', function() {

        ptor.findElement(protractor.By.id('btnAdd')).click();
		ptor.driver.getCurrentUrl().then(function(url) {
            expect(url).toEqual('http://localhost:3000/add');
		});
		
		
		// ** add contact
		ptor.findElement(protractor.By.id('txtFfirstname')).sendKeys('john');
		ptor.sleep(5000);
		ptor.findElement(protractor.By.id('txtLlastname')).sendKeys('Rambo');
		ptor.findElement(protractor.By.id('txtEemailaddress')).sendKeys('rambo@firstblood.com');
		
		// ** save the new contact
        ptor.findElement(protractor.By.id('btnSave')).click();	
		
		// ** verify new contact is listed
		ptor.driver.getCurrentUrl().then(function(url) {
            expect(url).toEqual('http://localhost:3000');		
        }, timeout);
		
        ptor.findElement(protractor.By.className('nav-stacked'))
            .getAttribute('childElementCount').then(function(count) {
                expect(count).toEqual('4');
        });

    }, timeout); 	

	it('should be able to delete a contact', function() {

		// ** initial list should be 3 contacts
        ptor.findElement(protractor.By.className('nav-stacked'))
            .getAttribute('childElementCount').then(function(count) {
                expect(count).toEqual('3');
        });

		// ** select first one
		ptor.findElement(protractor.By.xpath('//*[@id="name_id"]')).click();
		ptor.driver.getCurrentUrl().then(function(url) {
            expect(url).toEqual('http://localhost:3000/edit2');
		});
		
		
		// ** delete contact
		ptor.findElement(protractor.By.id('btnIconDelete')).click();

		// ** handle delete confirmation
		var varalert = ptor.switchTo().alert();
		varalert.accept();
		
		// ** list should be 2 contacts
        ptor.findElement(protractor.By.className('nav-stacked'))
            .getAttribute('childElementCount').then(function(count) {
                expect(count).toEqual('2');
        });		

    }, timeout); 

});