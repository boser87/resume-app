(function() {
    'use strict';

    function ResumeDataController(resumeDataSourceService) {
        let vm = this;

        function init() {
            vm.property = "value";
            initResume();
        }

        init();

        function initResume() {
            resumeDataSourceService.getResume('5c795800b0470195f1a1bcca', function(resume) {
                resume.date = new Date(resume.date);
                vm.resume = resume;
            })
        }

    }

    module.exports = ResumeDataController;
})();
