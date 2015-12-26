'use strict';

/*
 * Serviço eventData
 * 
 */
eventsApp.factory('eventData', function ($http) {
    return {
        getEvent: function () {
            return $http({ method: 'GET', url: 'http://localhost:62502/api/events/1' });
        }
    };
});