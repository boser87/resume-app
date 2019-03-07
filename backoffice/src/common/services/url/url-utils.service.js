(function() {
    'use strict';

    /*
    function Url(url) {
        this.url = url;
        this.build(url);
        this.getRelativePath()
    }

    Url.prototype.build = function(url) {
        this.url = url;
    };

    Url.prototype.getRelativePath = function() {
        return this.url.replace(/^(?:\/\/|[^\/]+)*\//, "")
    };
    */

    function urlUtils() {

        var getRelativePath = function(url) {
            return '/' + url.replace(/^(?:\/\/|[^\/]+)*\//, "");
        };

        var service = {
            getRelativePath: getRelativePath
        };

        return service;
    }

    module.exports = urlUtils;

})();
