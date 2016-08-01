'use strict';

angular.module('ckApp')
  .service('ckService', [
    function () {

      var self = this;

      self.getContacts = function (callback) {
        var contacts = JSON.parse(localStorage.getItem("source"));
        callback(contacts);
      };

      self.removeContact = function (pos, callback) {
        var array = [];
        array = JSON.parse(localStorage.getItem("source"));
        array[pos].active = false;
        localStorage.setItem("source", JSON.stringify(array));
        callback("ok");
      };

      self.createContact = function (data, pos, callback) {
        var array = [];
        var source = JSON.parse(localStorage.getItem("source"));

        if (source != null) {
          array = source;
        }
        array.push(data);
        localStorage.setItem("source", JSON.stringify(array));
        localStorage.setItem("pos", pos + 1);
        callback("ok");
      };

      self.editContact = function (data, pos, callback) {

        var pos = pos;

        var array = [];
        array = JSON.parse(localStorage.getItem("source"));
        array[pos].name = data.name;
        array[pos].address = data.address;
        array[pos].phone = data.phone;

        localStorage.setItem("source", JSON.stringify(array));
        callback("ok");
      };
    }
  ]);