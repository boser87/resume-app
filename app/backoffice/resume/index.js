(function() {
    'use strict';

    var angular = require('angular');
    var editResumeController = require('./edit-resume.controller');
    var resumesListController = require('./resumes-list.controller');
    var editFieldDirective = require('./edit-field.directive');

    angular
        .module('SampleApp')
        .controller('EditResumeController', editResumeController)
        .controller('ResumesListController', resumesListController)
        .directive('reEditField', editFieldDirective);

    editResumeController.$inject = ['resumeDataSourceService', '$filter'];
})();
