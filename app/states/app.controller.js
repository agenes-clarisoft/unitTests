(function() {
    'use strict';

    angular.module('app').config(function($stateProvider) {
        $stateProvider.state('app', {
            url: '/app',
            templateUrl: 'states/app.html',
            controller: 'AppController'
        });
    });

    angular.module('app').controller('AppController', function($scope) {
        $scope.name = 'ready';
    });
})();
