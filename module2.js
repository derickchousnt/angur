var app=angular.module('app',[])
  .value('discountRate', 0.8)
  .factory('calculateDiscount', function(discountRate) {
    return function(amount) {
      return amount * discountRate;
    };
  })
  .directive('discount', function(calculateDiscount, currencyFilter) {
    return function(scope, element, attrs) {
      var price = scope.$eval(attrs.discount);
      var discountPrice = calculateDiscount(price);
      element.html(currencyFilter(discountPrice));
    };
  })
  .directive('wordList', function() {
    return {
      link: function(scope, element, attrs) {
        scope.words = attrs.wordList.split(" ");
      },
      template: "<li ng-repeat='word in words'>\
                   {{word}}\
                 </li>"
    };
  })

  
  .controller('MessageController', function($scope) {
    $scope.message = 'hello, from the external controller';
  })
  .directive('message1', function() {
    return {
      template: "<strong>{{message}}</strong>"
    };
  })


  .directive('message2', function() {
    return {
      template: "<strong>{{message}}</strong>",
      controller: function($scope) {
        $scope.message = 'hello, from the internal controller';
      }
    };
  });


  // XMLHttpRequest cannot load file:///D:/00%20/old/angur/word-list.html. Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource.angular.js:9827 (anonymous function)angular.js:9628 sendReqangular.js:9344 $get.serverRequestangular.js:13189 processQueueangular.js:13205 (anonymous function)angular.js:14401 $get.Scope.$evalangular.js:14217 $get.Scope.$digestangular.js:14506 $get.Scope.$applyangular.js:1448 bootstrapApplyangular.js:4185 invokeangular.js:1446 doBootstrapangular.js:1466 bootstrapangular.js:1360 angularInitangular.js:26176 (anonymous function)angular.js:2744 triggerangular.js:3014 eventHandler
  //   .directive('wordListed', function() {
  //   return {
  //     link: function(scope, element, attrs) {
  //       scope.words = attrs.wordList.split(" ");
  //     },
  //     templateUrl: './word-list.html'
  //   };
  // });