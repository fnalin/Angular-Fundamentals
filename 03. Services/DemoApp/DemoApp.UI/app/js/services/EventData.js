'use strict';

/*
 * Serviço eventData
 * 
 */
eventsApp.factory('eventData', function ($resource) {
    return {
        getEvent: function () {
            //return $http({ method: 'GET', url: 'http://localhost:62502/api/events/1' });
            return $resource('http://localhost:62502/api/events/:id', { id: '@id' })
                .get({ id: 1 });
        }
    };
});