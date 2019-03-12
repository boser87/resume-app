(function() {
    'use strict';

    var angular = require('angular');
    var editFieldDirective = require('./edit-field.directive');

    angular
        .module('ResumeAppBackend')
        .directive('reEditField', editFieldDirective);

})();
