(function() {
    'use strict';

    var angular = require('angular');
    require('../common/services/url');

    var editResumeController = require('./edit-resume.controller');
    var resumesListController = require('./resumes-list.controller');

    angular
        .module('ResumeAppBackend')
        .controller('EditResumeController', editResumeController)
        .controller('ResumesListController', resumesListController);

    editResumeController.$inject = ['resumeDataSourceService', '$route', '$filter', '$location'];
    resumesListController.$inject = ['resumeDataSourceService', '$location', 'urlUtils'];
})();
