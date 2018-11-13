var angular = require('angular');

import 'bootstrap/dist/css/bootstrap.min.css';

angular.module('SampleApp', [require('angular-route')])
    .config(['$locationProvider', '$routeProvider',
        function($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            // routes
            $routeProvider
                .when("/", {
                    templateUrl: "./function1/partial1.html",
                    controller: "MainController"
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]);

require('./function1');
