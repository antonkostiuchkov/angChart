angular.module('app.directives.contactCard', [])
    .directive('contactCard', function () {
        return {
            restrict: 'E',
            scope: {
                friend: '=',
                title: '='
            },
            templateUrl: 'templates/contact-card.html',
            controller: function ($scope) {
                console.log($scope.friend);
            }
        };
    });