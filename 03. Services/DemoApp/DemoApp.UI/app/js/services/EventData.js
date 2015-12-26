'use strict';

/*
 * Serviço eventData
 * 
 */
eventsApp.factory('eventData', function ($http,$log) {
    return {
        getEvent: function (successCb) {
            $http({ method: 'GET', url: 'http://localhost:62502/api/events/1' })
                .success(function (data, status, headers, config) {
                    successCb(data);
                })
                .error(function (data, status, headers, config) {
                    $log.warn(data,status,headers,config);
                });
        }
    };
});