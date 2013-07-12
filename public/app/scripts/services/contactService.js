'use strict';

angular.module('ckServices', []).
  factory('ContactService', function() {
    var lastContactId = 0;

    return {
      contacts: [],

      getAll: function() {
        return this.contacts;
      },

      get: function(id) {
        for(var i = 0; i < this.contacts.length; i++) {
          if (this.contacts[i].id == id) {
            return this.contacts[i];
          }
        }

        return null;
      },

      add: function(firstName, lastName, email) {
        lastContactId++;

        this.contacts.push({
          'id': lastContactId,
          'firstName': firstName,
          'lastName': lastName,
          'email': email});
      },

      save: function(contact) {
        for(var i = 0; i < this.contacts.length; i++) {
          if (this.contacts[i].id == contact.id) {
            this.contacts[i] = contact;
          }
        }
      },

      delete: function(id) {
        var index = null;

        for(var i = 0; i < this.contacts.length; i++) {
          if (this.contacts[i].id == id) {
            index = i;
            break;
          }
        }

        if (index != null) {
          this.contacts.splice(index,1);
        }
      }
    }
  });