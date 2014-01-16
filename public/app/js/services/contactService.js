'use strict';

angular.module('ckServices', []).
  factory('ContactService', function() {
    var lastContactId = 0;

//    var getLastContactId = function() {
//        var last = 0;
//        for(var i = 0; i < this.contacts.length; i++) {
//            if (this.contacts[i].id > last) {
//                last = this.contacts[i].id;
//            }
//        }
//        return last;
//    };

    return {
      contacts: [],

      retrieveAll: function() {
            this.contacts  = [
            {id: 10, first: 'John', last: 'Doe', email: 'jdoe@email.com'},
            {id: 20, first: 'Nancy', last: 'Coolperson', email: 'ncoolperson@email.com'},
            {id: 99, first: 'Michael', last: 'Bluth', email: 'mbluth@email.com'}];

            lastContactId = 0;

            for(var i = 0; i < this.contacts.length; i++) {
               if (this.contacts[i].id > lastContactId) {
                   lastContactId = this.contacts[i].id;
                }
            }
      },

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

      add: function(contact) {
        lastContactId++;
        contact.id = lastContactId;

        this.contacts.push(contact);
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