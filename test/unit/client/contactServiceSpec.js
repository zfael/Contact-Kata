'use strict';

describe('service', function() {
  var assert = chai.assert,
    expect = chai.expect;

  beforeEach(module('ckServices'));

  describe('ContactService', function () {
    var service = undefined;

    beforeEach(inject(function(ContactService) {
      service = ContactService;
    }));

    it('should exist', function() {
      expect(service).not.equal(null);
    });

    it('should have a method to get all contacts', function() {
      expect(service.getAll).not.equal(null);
    });

    it ('should return a list of contacts', function () {
      var contacts = service.getAll();

      expect(contacts.length).equal(0);
    });

    it('should have a method to add contacts', function () {
      expect(service.add).not.equal(null);
    });

    it('should have a method to get all contacts', function () {
      expect(service.getAll).not.equal(null);
    });

    it('should add a contact to the list of contacts', function() {
      service.add('John', 'Doe', 'jdoe@gmail.com');
      expect(service.getAll().length).equals(1);
    });

    it ('should add a second contact from the list of contacts', function () {
      service.add('John', 'Doe', 'jdoe@gmail.com');
      service.add('Jane', 'Doe', 'jdoe@gmail.com');
      expect(service.getAll().length).equals(2);
    });

    it('should have a method to get one contact', function () {
      expect(service.get).not.equal(null);
    });

    it('should get a contact from the list of contacts', function() {
      service.add('John', 'Doe', 'jdoe@gmail.com');

      var contact = service.get(1);
      expect(contact.firstName).equals('John');
      expect(contact.lastName).equals('Doe');
      expect(contact.email).equals('jdoe@gmail.com');
    });

    it ('should get a second contact from the list of contacts', function () {
      service.add('John', 'Doe', 'jdoe@gmail.com');
      service.add('Jane', 'Doe', 'jdoe@gmail.com');
      expect(service.get(2).firstName).equals('Jane');
    });

    it('should have a method to save a contact', function () {
      expect(service.save).not.equal(null);
    });

    it ('should update a contact in the list of contacts', function () {
      service.add('John', 'Doe', 'jdoe@gmail.com');
      var contact = service.get(1);

      contact.firstName = 'Gob';
      contact.lastName = 'Bluth';
      contact.email = 'gbluth@magic.com';

      service.save(contact);

      var updated = service.get(1);

      expect(updated.firstName).equals('Gob');
      expect(updated.lastName).equals('Bluth');
      expect(updated.email).equals('gbluth@magic.com');
    });

    it ('should update a second contact in the list of contacts', function () {
      service.add('John', 'Doe', 'jdoe@gmail.com');
      service.add('Jane', 'Doe', 'jdoe@gmail.com');
      var contact = service.get(2);

      contact.firstName = 'Gob';
      contact.lastName = 'Bluth';
      contact.email = 'gbluth@magic.com';

      service.save(contact);

      var updated = service.get(2);

      expect(updated.firstName).equals('Gob');
      expect(updated.lastName).equals('Bluth');
      expect(updated.email).equals('gbluth@magic.com');
    });

    it('should have a method to delete a contact', function () {
      expect(service.delete).not.equal(null);
    });

    it ('should delete a contact in the list of contacts', function() {
      service.add('John', 'Doe', 'jdoe@gmail.com');
      service.delete(1);

      var contact = service.get(1);

      expect(contact).equals(null);
      expect(service.getAll().length).equals(0);
    });

    it ('should delete a contact in the list of contacts', function() {
      service.add('John', 'Doe', 'jdoe@gmail.com');
      service.add('Jane', 'Doe', 'jdoe@gmail.com');

      service.delete(2);

      var contact = service.get(2);

      expect(contact).equals(null);
      expect(service.getAll().length).equals(1);
    });
  });
});