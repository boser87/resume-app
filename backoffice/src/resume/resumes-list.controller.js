(function() {
    'use strict';

    function ResumesListController(resumeDataSourceService, $location, urlUtils) {
        var vm = this;

        function init() {
            initNewResume();
            loadResumes();
        }

        init();

        function ResumeRow(resumeData) {
            var obj = {};

            obj.data =  resumeData;
            obj.editMode = false;

            return obj;
        }

        // TODO: these public methods should be more visible like John Papa says

        vm.saveResume = function(resume) {
            resumeDataSourceService.saveResume(resume.data,
                function(response) {
                    console.log(response);
                    resume.editMode = false;
                });
        }

        vm.startEditing = function(resumeRow) {
            resumeRow.editMode = true;
        }

        vm.cancelEditing = function(resumeRow) {
            resumeRow.editMode = false;
        }

        vm.createNewResume = function() {
            resumeDataSourceService.createResume(vm.newResume, function(response) {
                console.log(response);
                loadResumes();
                initNewResume();
            });
        }

        vm.goToDetails = function(resumeRow) {
            $location.path(urlUtils.getRelativePath(resumeRow.data._links.resume.href));
        }

        // Private methods

        function loadResumes() {
            resumeDataSourceService.getAllResumes(function(resumes) {
                var resumeRows = [];

                resumes.forEach(function(resume) {
                    resumeRows.push(ResumeRow(resume));
                });

                vm.resumesRows = resumeRows;
            })
        }

        function initNewResume() {
            vm.newResume = {};
            vm.newResume.date = new Date();
        }
    }

    module.exports = ResumesListController;
})();
