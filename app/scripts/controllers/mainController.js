(function() {
    angular.module('controllers', [])
        .controller('MainController', ['$rootScope', function($rootScope) {
            $rootScope.world = "someTest";
        }]);
})();