(function () {
  'use strict';

  angular.module('App.components.list')
    .controller('list', function ($scope, Query) {
      Query.artist.get(function (res) {
        console.log(res.artists)
      });
    });
}());
