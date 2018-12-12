(function() {
  'use strict';

    function resumeDataSourceService(Restangular, config) {

        Restangular.setBaseUrl(config.resumeDataSource.baseUrl);

        var service = {
            getAllResumes: getAllResumes,
            saveResume: saveResume
        };

        return service;

        //

        function getAllResumes(successCallback) {
            Restangular.all('resumes').getList().then(successCallback, handleError)
        }

        function saveResume(resume, successCallback) {
            resume.save().then(successCallback, handleError);
        }

        function handleError(response) {
            console.log("Error with status code", response.status);
        }
    }

    module.exports = resumeDataSourceService;

})();
