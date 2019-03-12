import '@fortawesome/fontawesome-free-regular'

(function() {
    'use strict';
    let angular = require('angular');

    require('resume-app-data-source');

    angular.module('ResumeAppFrontend', ['ResumeAppDataSource'])

    let resumeDataController = require('./resume-data.controller');

    resumeDataController.$inject = ['resumeDataSourceService'];

    angular
        .module('ResumeAppFrontend')
        .controller('ResumeDataController', resumeDataController)

})();
