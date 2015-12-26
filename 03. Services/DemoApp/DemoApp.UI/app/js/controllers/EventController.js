'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {

        //variável usado no filtro da diretiva repeat (- decrescente)
        $scope.sortorder = 'name';

        //representa um obj evento
        eventData.getEvent(function (data) {
            $scope.event = data;
        });

        //Evento Handler - setinha pra acima
        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        //Evento Handler - setinha pra baixo
        $scope.downVoteSession = function (session) {
            if (session.upVoteCount > 0)
                session.upVoteCount--;
        };
    }
);