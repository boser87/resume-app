(function() {
    'use strict'

    function EditResumeController(resumeDataSourceService, $route, $filter, $location) {
        let vm = this;
        vm.resume = {};

        function init() {
            initResume();
        }

        init();

        function initResume() {
            resumeDataSourceService.getResume($route.current.params.id, function(resume) {
                resume.date = new Date(resume.date);
                vm.resume = resume;
            })
        }

        vm.onSubmit = function(resume) {
            let resumeToSend = angular.copy(resume);
            resumeToSend.date = $filter('date')(resumeToSend.date, 'yyyy-MM-dd');
            console.log(resumeToSend);
            resumeDataSourceService.saveResume(resume,
                function(response) {
                    console.log(response);
                    $location.path('/resumes');
            });
        }
    };

    module.exports = EditResumeController;
})();
