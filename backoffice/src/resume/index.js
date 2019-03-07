(function() {
    'use strict';

    var angular = require('angular');

    var editResumeController = require('./edit-resume.controller');
    var resumesListController = require('./resumes-list.controller');

    angular
        .module('SampleApp')
        .controller('EditResumeController', editResumeController)
        .controller('ResumesListController', resumesListController);

    editResumeController.$inject = ['resumeDataSourceService', '$route', '$filter', '$location'];
    resumesListController.$inject = ['resumeDataSourceService', '$location', 'urlUtils'];
})();
