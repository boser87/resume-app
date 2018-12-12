(function() {
    'use strict';
    var angular = require('angular');

    require('bootstrap/dist/css/bootstrap.css');
    require('angular-route');
    require('angular-resource');
    require('restangular');

    angular.module('SampleApp', ['ngRoute', 'ngResource', 'restangular'])
        .config(['$locationProvider', '$routeProvider',
            function($locationProvider, $routeProvider) {
                $locationProvider.hashPrefix('!');
                $routeProvider
                    .when("/", {
                        redirectTo: '/resumes'
                    })
                    .when("/resumes", {
                        templateUrl: "./resume/resumes-list.html",
                        controller: "ResumesListController as resumesList"
                    })
                    .when("/resume/:id/edit", {
                        templateUrl: "./resume/edit-resume.html",
                        controller: "EditResumeController as editResume"
                    })
                    .otherwise({
                        redirectTo: '/resumes'
                    });
            }
        ]);

    require('./resume');
    require('./common');

})();
