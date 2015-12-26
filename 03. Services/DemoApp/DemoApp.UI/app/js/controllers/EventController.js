'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $log) {

        //variável usado no filtro da diretiva repeat (- decrescente)
        $scope.sortorder = 'name';

        //Chamando método do serviço que busca dados no servidor
        eventData.getEvent()
            .success(function (data, status, headers, config) {
                //console.log(status);
                //console.log(headers());
                //console.log(config);
                $scope.event = data;
            })
            .error(function (data, status, headers, config) {
                $log.warn(data, status, headers, config);
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