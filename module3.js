var app=angular.module('app',[])
  .controller('MessageController', function($scope) {
    $scope.message  = "the controller";
    $scope.message1  = "directive 1";
    $scope.message2  = "directive 2";
  })
  .directive('message', function() {       
    return {
      template: "<p>hello, from {{message}}</p>",
      scope: {
        message: '='
      }
    };
  });