'use strict';

/*
 * Serviço eventData
 * 
 */
eventsApp.factory('eventData', function ($resource) {

    var resource = $resource('http://localhost:62502/api/events/:id', { id: '@id' });

    return {
        getEvent: function () {
            return resource.get({ id: 1 });
        },
        save:function(event) {
            return resource.save(event);
        }
    };
});