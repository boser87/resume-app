(function() {
    'use strict'

    function editField() {
        var directive = {
            restrict: 'A',
            templateUrl: '/backoffice/resume/edit-field.directive.html',
            scope: {
                editObject: '=',
                editField: '=',
                editMode: '='
            },
            controller: ExampleController
        };

        return directive;
    }

    ExampleController.$inject = ['$scope'];

    function ExampleController($scope) {
        //$scope.editValue = 'whatever'; // TODO: do I have to inject scope in directive's controller?
        $scope.myVm = {};
        $scope.myVm.editValue = $scope.editObject.data[$scope.editField];
        $scope.valueChanged = function(newValue, oldValue) {
            $scope.editObject.data[$scope.editField] = newValue.editValue; // TODO: find good names for these variables
        }
    }

    module.exports = editField;
})();
