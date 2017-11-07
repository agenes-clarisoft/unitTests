(function() {
    'use strict';

    var app = angular.module('app', ['ui.router', 'ngMessages', 'ngAnimate', 'ngAria', 'ngMaterial', 'ngSanitize'/*, 'ngStorage'*/]);

    app.config(function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/app');
    });
})();
