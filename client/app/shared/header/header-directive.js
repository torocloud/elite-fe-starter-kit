(function () {
  'use strict';

  angular.module('App.shared.header')
    .directive('appHeader', function (Config) {

      function link(scope) {
        scope.navLinks = [
          {title: 'Products', state: 'elite'}
        ];
      }

      return {
        templateUrl: Config.rootPath + 'shared/header/header-view.html',
        link: link,
        replace: true
      };
    });

}());
