'use strict';

/**
 * @ngdoc function
 * @name onlinetestApp.directive:footerDir
 * @description
 * # footerDir
 * Directive of the onlinetestApp
 */
angular.module('OrderManagementSystem')
  .directive('headerDir', function () {
    return{
      'restrict':'EAMC',
      'templateUrl':'views/header.html'
    }
  });
