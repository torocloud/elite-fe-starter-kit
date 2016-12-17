(function () {
  'use strict';

  angular.module('App')
    .config(function ($routeProvider, Config) {
      $routeProvider
        .when('/home', {
          templateUrl: Config.rootPath + 'components/home/home-view.html',
          controller: 'home'
        })
        .when('/seed-help', {
          templateUrl: Config.rootPath + 'components/seed-help/seed-help-view.html',
          controller: 'seedHelp'
        })
        .when('/list', {
          templateUrl: Config.rootPath + 'components/list/list-view.html',
          controller: 'list'
        })
        .otherwise({
          redirectTo: '/home'
        });
    });

}());
