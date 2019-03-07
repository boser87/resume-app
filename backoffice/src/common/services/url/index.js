(function() {
    'use strict';

    var angular = require('angular');
    var urlUtils = require('./url-utils.service');

    angular.module('SampleApp')
        .factory('urlUtils', urlUtils);
})();
