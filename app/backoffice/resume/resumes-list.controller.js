(function() {
    'use strict';

    function ResumesListController(resumeDataSourceService) {
        var vm = this;

        resumeDataSourceService.getAllResumes(function(resumes) { // wrap in activate() function
            var resumeRows = [];

            resumes.forEach(function(resume) {
                resumeRows.push(ResumeRow(resume));
            });

            vm.resumesRows = resumeRows;
        })

        function ResumeRow(resumeData) {
            var obj = {};

            obj.data =  resumeData;
            obj.editMode = false;

            return obj;
        }

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
    }

    module.exports = ResumesListController;
})();
