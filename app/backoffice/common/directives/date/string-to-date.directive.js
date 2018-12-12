(function() {
    'use strict'

    function stringToDate() {
        var directive = {
            require: 'ngModel',
            link: function(scope, element, attrs, ngModel) {
                ngModel.$formatters.push(function(value) {
                    return new Date(value);
                });
            }
        }

        return directive;
    }

    module.exports = stringToDate;
})();
