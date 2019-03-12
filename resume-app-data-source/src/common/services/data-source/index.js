(function() {
    'use strict';

    let angular = require('angular');
    let config = require('./resume-data-source.config');
    let resumeDataSourceService = require('./resume-data-source.service');

    angular.module('ResumeAppDataSource')
        .constant('config', config)
        .factory('resumeDataSourceService', resumeDataSourceService);

    require('restangular');

    resumeDataSourceService.$inject = ['Restangular', 'config'];

})();
