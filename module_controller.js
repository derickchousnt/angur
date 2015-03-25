app
	.controller('MessageController', function($scope) {
  		$scope.message = "This is a model.";
	})
	.controller('AnotherMessageController',function($scope){
		$scope.message = "This is another model.";
	})
	.controller('LocaleController', function($scope, $locale) {
	    $scope.locale = $locale.id;
  	})
  .controller('PriceController',
    ['$scope',
    '$anchorScroll',
    '$animate',
    '$cacheFactory',
    '$compile',
    '$controller',
    '$document',
    '$exceptionHandler',
    '$filter',
    '$http',
    '$httpBackend',
    '$interpolate',
    '$interval',
    '$locale',
    '$location',
    '$log',
    '$parse',
    '$q',
    '$rootElement',
    '$rootScope',
    '$sce',
    '$sceDelegate',
    '$templateCache',
    '$timeout',
    '$window',
    'fullPrice',
    'discountPrice',
    function(
      $scope,
      $anchorScroll,
      $animate,
      $cacheFactory,
      $compile,
      $controller,
      $document,
      $exceptionHandler,
      $filter,
      $http,
      $httpBackend,
      $interpolate,
      $interval,   
      $locale,
      $location,
      $log,
      $parse,
      $q,
      $rootElement,
      $rootScope,
      $sce,
      $sceDelegate,
      $templateCache,
      $timeout,
      $window,
      fullPrice,
      discountPrice   ) {
        $scope.fullPrice = fullPrice();
        $scope.discountPrice = discountPrice();
  }])
  .controller('ScoreController', function($scope, score) {
    $scope.score = score;
    $scope.increment = function() {
      $scope.score.increment();
    };
  })
  .controller('DateController', function($scope) {
    $scope.now = Date.now();
  })
.controller('ItemsController', function($scope, items) {
    $scope.items = items;
  })

// The provider for a filter will be named <filtername>Filter.
  .controller('FilteredItemsController', function($scope, items, filterFilter) {
    $scope.redItemsCount = filterFilter(items, {color: 'red'}).length;
  });


