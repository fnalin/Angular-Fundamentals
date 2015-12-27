'use strict';

eventsApp.factory('exCache', function ($cacheFactory) {
    return $cacheFactory('exCache', { capacity: 3 });
});