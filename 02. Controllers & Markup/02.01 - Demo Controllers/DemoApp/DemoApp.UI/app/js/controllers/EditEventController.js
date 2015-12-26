'use strict'

eventsApp.controller('EditEventController', function ($scope) {
    $scope.saveEvent = function (event) {
        window.alert('event: ' + event.name + ' saved!');
    };

    $scope.cancelEdit = function () {
        window.location = "/app/EventDetails.html";
    };
});