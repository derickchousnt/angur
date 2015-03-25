var app=angular.module('app', ['ngAnimate']);

angular.module('app').config(['$controllerProvider', function($controllerProvider) {
  $controllerProvider.allowGlobals();
}])
  .value('randomScore', function() {
     return Math.ceil(Math.random() * 10);
  })
.value('items', [
    {name: 'Item 3', position: 3, color: 'red', price: 2.75},
    {name: 'Item 1', position: 1, color: 'red', price: 0.92},
    {name: 'Item 4', position: 4, color: 'blue', price: 3.09},
    {name: 'Item 2', position: 2, color: 'red', price: 1.95},
    {name: 'Item 5', position: 5, color: 'green', price: 1.92},
    {name: 'Item 6', position: 6, color: 'blue', price: 0.95},
    {name: 'Item 7', position: 7, color: 'green', price: 3.95},
  ])
// custom filter
  .filter('smiley', function() {
    return function(text) {
      return '\u263A ' + text + ' \u263A';
    };
  })

.value('locales', {
    'de': {greeting: 'guten Tag'},
    'en-us': {greeting: 'howdy'},
    'fr': {greeting: 'bonjour'}
  })
.filter('localize', function(locales, $locale) {
    return function(key) {
      var locale = locales[$locale.id] || locales['en-us'];
      return locale[key];
    };
  })
    
 .factory('fullPrice', ['$http', function($http) {
    return function() {
      // Use $http to fetch remote data.
      return 100;
    }
  }])
  .factory('discountPrice', ['$http', function($http) {
    return function() {
      // Use $http to fetch remote data.
      return 40;
    }
  }])
  .factory('score', function(randomScore) {
    var points = randomScore();
    return {
       increment: function() {
         return ++points;
       },
       getPoints: function() {
         return points;
       }
    };
  });