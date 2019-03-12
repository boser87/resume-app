(function() {
    'use strict';
    let angular = require('angular');

    require('restangular');

    angular.module( 'ResumeAppDataSource', ['restangular']);

    require('./common/services/data-source');
})();
