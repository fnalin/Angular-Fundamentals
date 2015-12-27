'use strict';

var eventsApp = angular.module('eventsApp', [
    'ngSanitize', //permite html porém bloqueia o que considera inseguro
    'ngResource' //alternativa ao $http
]);