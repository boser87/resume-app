(function() {
  'use strict';

    function resumeDataSourceService(Restangular, config) {

        Restangular.setBaseUrl(config.resumeDataSource.baseUrl);

        var baseResumes = Restangular.all('resumes');

        var service = {
            getAllResumes: getAllResumes,
            saveResume: saveResume,
            createResume: createResume,
            getResume: getResume
        };

        return service;

        //

        function getResume(id, successCallback) {
            Restangular.one('resumes', id).get().then(successCallback, handleError)
        }

        function getAllResumes(successCallback) {
            baseResumes.getList().then(successCallback, handleError)
        }

        function createResume(resume, successCallBack) {
            baseResumes.post(resume).then(successCallBack, handleError);
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
