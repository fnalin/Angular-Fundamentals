'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $log) {

        //variável usado no filtro da diretiva repeat (- decrescente)
        $scope.sortorder = 'name';

        //Chamando método do serviço que busca dados no servidor
        eventData.getEvent()
            .$promise
            .then(function (event) {
                //sucesso
                $scope.event = event;
                //console.log(event);
            })
            .catch(function (response) {
                //caso de erro
                console.log(response);
            })
        ;


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