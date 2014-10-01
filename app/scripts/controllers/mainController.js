(function() {
    'use strict';

    angular.module('controllers', [])
        .controller('MainController', ['$scope', '$http', function($scope, $http) {
            $scope.postsModel = {};
            $scope.newPost ={};

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

            $scope.addData = function() {

                var request = $http({
                   method: "post",
                   url: "content/posts.json",
                   headers: {'Content-Type': 'application/json'},
                   data : angular.toJson($scope.newPost)
                });

                return request.then(handleSuccess,handleError);
            };

            function handleSuccess( response ) {

                return( response.data );

            }

            function handleError(response) {

                console.log(response.data.message);
            }

        }]);
})();