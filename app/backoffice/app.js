'use strict';

var function1Component = require('./function1/controller1')

module.exports = angular.module('SampleApp', ['ngRoute'])
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
    ])
    .controller('MainController', function1Component);
