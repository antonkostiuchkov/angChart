App.factory('GoatFactory', ['$http', function($http) {
    return {
        get: function () {
            return $http.get('api/friends.json').then(function(response){
                return response.data;
            });
        }
    }
}]);

