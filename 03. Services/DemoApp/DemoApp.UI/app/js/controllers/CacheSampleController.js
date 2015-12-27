'use strict';

eventsApp.controller('CacheSampleController',
    function CacheSampleController($scope, exCache) {
        $scope.addToCache = function (key, value) {
            exCache.put(key, value);
            key = value = "";
        };

        $scope.readFromCache = function (key) {
            return exCache.get(key);
        };

        $scope.getCacheStatus = function () {
            return exCache.info();
        };
    });