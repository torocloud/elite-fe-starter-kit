(function () {
  'use strict'

  angular.module('App')
    .config(config)

  function config ($stateProvider) {

    $stateProvider
      .state('elite', {
        url: '/'
      })
  }
}());
