var adventApp = angular.module("adventApp", []);

adventApp.controller("adventController", ["$scope", "$window", function (scope, window) {
    scope.messages = {
        warning:'',
        success:'',
        error:'',
        clear: function () {
            this.warning = '';
            this.success = '';
            this.error = '';
        }
    };

    scope.calendar = calendarData;

    scope.openDoor = function (col) {
        col.open = true;
    };

    scope.dayPage = function (col) {
        window.location.href = col.link;
    }
}]);