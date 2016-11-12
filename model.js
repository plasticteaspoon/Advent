var yourApp = angular.module("yourApp", []);

yourApp.controller("yourController", ["$scope", function (scope) {
    scope.messages = {
        warning:'Warning! You have been warned',
        success:'Success!!!',
        error:'There was an error',
        clear: function () {
            this.warning = '';
            this.success = '';
            this.error = '';
        }
    };
}]);