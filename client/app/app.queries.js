(function () {
  'use strict';

  angular.module('App')
    .service('Query', function ($resource, Config) {
      return {
        test: $resource(Config.apiPath + 'test', {}, {
          get: {method: 'GET'}
        }),
        artist: $resource(Config.apiPath + 'artist', {}, {
          get: {method: 'GET'}
        })
      };
    });

}());
