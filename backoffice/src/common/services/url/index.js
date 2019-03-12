(function() {
    'use strict';

    var angular = require('angular');
    var urlUtils = require('./url-utils.service');

    angular.module('ResumeAppBackend')
        .factory('urlUtils', urlUtils);
})();
