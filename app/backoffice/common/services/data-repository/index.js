(function() {
    'use strict';

    var angular = require('angular');
    require('restangular');
    var config = require('./resume-data-source.config');
    var resumeDataSourceService = require('./resume-data-source.service');

    angular.module('SampleApp')
        .constant('config', config)
        .factory('resumeDataSourceService', resumeDataSourceService);

    resumeDataSourceService.$inject = ['Restangular', 'config'];

})();
