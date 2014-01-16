servicesModule.factory('storageService', ['$log', function ($log) {
        var service = {
            get: function(key) {
                var value = localStorage.getItem(key);
                $log.log('Local Storage: Retrieved key: ' + key + ', value: ' + value);
                if (value && value != 'undefined') {
                    return angular.fromJson(value);
                }
                return null;
            },

            set: function(key,value) {
                var storeValue = angular.toJson(value);
                localStorage.setItem(key, storeValue);
                $log.log('Local Storage: Stored key: ' + key + ', value: ' + storeValue);
            },

            remove: function(key) {
                localStorage.removeItem(key);
                $log.log('Local Storage: Removed key: ' + key);
            },

            has: function(key) {
                var hasItem = localStorage.getItem(key);
                $log.log('Local Storage: Contains key: ' + key + ', result: ' + hasItem);
                return (hasItem) ? true : false;
            },
            recentKey: function() {
                if (user && user.data && user.data.userName) {
                    return ('recent_'+user.data.userName);
                }
                else {
                    return 'recent'
                }
            },
            getContacts: function(){
                return this.get('Contacts');
            },
            setContacts: function(value){
                return this.set('Contacts', value)
            }
        };

        return service;
    }]);