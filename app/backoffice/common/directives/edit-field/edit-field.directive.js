(function() {
    'use strict'

    /**
     * Interesting how I could not simply pass the, for instance, string value from calling resume-list the object to
     * this directive but I had to pass the whole object and also the name of the property I wanted to change
     * https://stackoverflow.com/questions/29265310/angularjs-directive-two-way-data-binding-not-working-when-observing-boolean
     */

    function editField() {
        var directive = {
            restrict: 'A',
            templateUrl: function(elem,attrs) {
                return attrs.editType ? '/backoffice/resume/edit-field-' + attrs.editType + '.directive.html' : '/backoffice/resume/edit-field-text.directive.html'
            },
            scope: {
                editMode: '=',
                editObject: '=',
                editFieldName: '=',
                editType: '=?'
            },
            controller: function () {

                // Reason why we need onInit:
                // https://docs.angularjs.org/api/ng/service/$compile#-bindtocontroller-

                this.$onInit = function() {
                    var vm = this;

                    vm.editType = vm.editType || 'text';

                    vm.editValue = vm.editObject.data[vm.editFieldName];
                    vm.valueChanged = function(newValue, oldValue) {
                        vm.editObject.data[vm.editFieldName] = newValue.editValue;
                    }
                };
            },
            bindToController: true, // This is useful so I don't have to inject scope in the directive's controller
            controllerAs: 'vm'
        };

        return directive;
    }

    module.exports = editField;
})();
