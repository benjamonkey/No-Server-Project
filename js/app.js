angular.module('app', ['ui.router']).
config(function ($stateProvider, $urlRouterProvider) {



    $stateProvider
        .state('home', {
        url: '/',
        templateUrl: './views/home.html',
        controller: 'mainControl'
        })
        .state('country', {
            url: '/country',
            templateUrl: 'views/country.html',
            controller: 'mainControl'
        })
        .state('funk', {
            url: '/funk',
            templateUrl: 'views/funk.html',
            controller: 'mainControl'
        })
        .state('hair', {
            url: '/hair',
            templateUrl: 'views/hair.html',
            controller: 'mainControl'
        })
        .state('oldies', {
            url: '/oldies',
            templateUrl: 'views/oldies.html',
            controller: 'mainControl'
        })
        .state('rock', {
            url: '/rock',
            templateUrl: 'views/rock.html',
            controller: 'mainControl'
        })
        .state('electro', {
            url: '/electro',
            templateUrl: 'views/electro.html',
            controller: 'mainControl'
        });
      $urlRouterProvider.otherwise('/');

});
