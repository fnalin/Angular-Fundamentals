'use strict'

eventsApp.controller('EditEventController', function ($scope, eventData) {
    $scope.saveEvent = function (event, newEventForm) {
        if (newEventForm.$valid) {
            event.id = 6;//setado manualmente
            eventData.save(event)
                .$promise
                .then(function (response) {
                    console.log('success', response);
                    $scope.cancelEdit();
                })
                .catch(function (response) { console.log('failure', response); });
        }
    };

    $scope.cancelEdit = function () {
        window.location = "/app/EventDetails.html";
    };
});