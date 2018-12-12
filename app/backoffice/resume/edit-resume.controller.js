(function() {
    'use strict'

    function EditResumeController(resumeDataSourceService, $filter) {
        var vm = this;
        vm.resume = {};

        vm.onSubmit = function(resume) {
            var resumeToSend = angular.copy(resume);
            resumeToSend.date = $filter('date')(resumeToSend.date, 'yyyy-MM-dd');
            console.log(resumeToSend);
        }
    };

    module.exports = EditResumeController;
})();
