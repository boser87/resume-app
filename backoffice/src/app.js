(function() {
    'use strict';
    var angular = require('angular');

    require('bootstrap/dist/css/bootstrap.css');
    require('angular-route');
    require('angular-resource');
    require('restangular');
    require('resume-app-data-source');

    angular.module('ResumeAppBackend', ['ngRoute', 'ngResource', 'restangular', 'ResumeAppDataSource'])
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
                    .when("/resumes/:id", {
                        templateUrl: "./resume/edit-resume.html",
                        controller: "EditResumeController as editResume"
                    })
                    .otherwise({
                        redirectTo: '/resumes'
                    });
            }
        ]);

    require('./resume');
    require('./common/directives/edit-field');
    require('./common/directives/date');

})();
