'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        //representa um evento
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Montain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png'

        };
    }
);