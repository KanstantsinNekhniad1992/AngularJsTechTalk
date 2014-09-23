(function() {
    'use strict';

    angular.module('controllers', [])
        .controller('MainController', ['$scope', '$http', function($scope, $http) {
            $scope.postsModel = {};

            $http.get('content/posts.json').success( function(data){
                angular.forEach(data.posts, function(value,prop) {
                    if(!angular.isDefined(value.image)) {
                        data.posts[prop].image = 'images/noimage.gif';
                    }
                });
                $scope.postsModel = data;
            }).
            error(function() {
                $scope.postsModel.notFound = 'Posts not found!';
            });
			
			console.log("I'm in example directory!");
        }]);
})();