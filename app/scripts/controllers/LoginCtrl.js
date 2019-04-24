'use strict';

var app=angular.module('OrderManagementSystem', [
  'ngRoute'
]);
app.config(['$routeProvider',
  function( $routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })

      .when('/Order', {
        templateUrl: 'views/OrderHtml.html'
        // controller: 'OrderCtrl'

      })
      .otherwise({
        redirectTo: '/'
      });
  }]);


      app .controller('LoginCtrl', function ($scope,$location,$http){
          function loginSucc(res){
            debugger;
            if(res.data.length){
              $rootScope.$broadcast('loginEve',res.data[0]);
              $location.path('/Order')
            }else{
              $scope.msg="Please check u r uid or pwd";
            }
          }

          function loginFail(res){
            debugger;
            $scope.msg=res.data;
          }

          $scope.fnLogin=function(arg1,arg2){

            $http.get('http://localhost:8080/login/'+arg1+'/'+arg2)
              .then(function(res){
                $scope.result = res;
                if(res.data.login=="success"){
                  // alert("Successfully Login");
                  $location.path('/Order')
                }else{
                   alert("please check id or password");
                }
              });
          }
        }
      )

