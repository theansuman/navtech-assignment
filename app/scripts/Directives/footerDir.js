'use strict';

/**
 * @ngdoc function
 * @name onlinetestApp.directive:headerDir
 * @description
 * # headerDir
 * Directive of the onlinetestApp
 */
angular.module('OrderManagementSystem')
  .directive('footerDir', function () {
    return{
      'restrict':'EAMC',
      'templateUrl':'views/footer.html'
    }
  });
