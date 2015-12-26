'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        //permitido através do ngSanitize
        //obs.: a partir do 1.2 não existe a diretiva ng-html-unsafe, só a ng-html
        $scope.snippet = '<span style="color:red;">Exemplo de html não seguro p/ demonstrar o sanitize</span>';

        //usando a diretiva ng-show / ng-hide
        $scope.boolValue = true;

        //usando prop. css no controller e consumindo na view com o ng-style
        $scope.myStyle = { color: 'red' };

        //variável que especifica uma classe e é consumida na view através do ng-class, ng-classeven ou ng-classodd
        $scope.myClass = "blue";

        //ngDisabled = ngChecked = ngMultiple = ngReadonly = ngSelect
        //Substitui o atributo do HTML5 que dependendo do browser pode ou não funcionar
        $scope.buttonDisabled = true;

        //usado no html para demonstrar expressões
        $scope.myValue = 10;

        //representa um obj evento
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Montain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    "id": 1,
                    "name": "Directives Masterclass",
                    "creatorName": "Bob Smith",
                    "duration": 1,
                    "level": "Advanced",
                    "abstract": "In this session you will learn the ins and outs of directives!",
                    "upVoteCount": 0
                },
                {
                    "id": 2,
                    "name": "Scopes for fun and profit",
                    "creatorName": "John Doe",
                    "duration": 3,
                    "level": "Introductory",
                    "abstract": "This session will take a closer look at scopes.  Learn what they do, how they do it, and how to get them to do it for you.",
                    "upVoteCount": 0
                },
                {
                    "id": 3,
                    "name": "Well Behaved Controllers",
                    "creatorName": "Jane Doe",
                    "duration": 2,
                    "level": "Intermediate",
                    "abstract": "Controllers are the beginning of everything Angular does.  Learn how to craft controllers that will win the respect of your friends and neighbors.",
                    "upVoteCount": 0
                }
            ],
        };

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