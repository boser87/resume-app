(function() {
    'use strict';

    var angular = require('angular');
    var stringToDate = require('./string-to-date.directive');

    angular
        .module('SampleApp')
        .directive('stringToDate', stringToDate);
})();
