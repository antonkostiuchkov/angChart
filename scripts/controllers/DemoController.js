App.controller('DemoCtrl', ['$scope', 'GoatFactory', function($scope, GoatFactory) {
    $scope.title = "Title";
    $scope.items = ['minute', 'hour', 'day', 'month', 'quarter', 'year'];
    $scope.defaultPeriod = 'hour';

    GoatFactory.get().then(function (response) {
        $scope.friends = response;
    });

}]);