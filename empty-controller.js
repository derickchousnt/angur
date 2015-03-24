function EmptyController() {

}

function MessageController($scope) {
  // this.message = "This is a model A.";
  $scope.message="This is a model A with scope";
}

function CountController($scope) {
  $scope.count = function() { return 12; }
}

function AdditionController($scope) {
	$scope.operand1=0;
	$scope.operand2=0;
	$scope.number=2;
  	$scope.add = function() {
    	return $scope.operand1 + $scope.operand2;
  }
  $scope.options = [0,1,2,3,4];
}

function Addition2Controller($scope) {
  $scope.number = 2;
  $scope.add = function(operand1, operand2) {
    return operand1 + operand2;
  }
}

function AuthController($scope) {
  $scope.authorized = true;
  $scope.toggle = function() {
    $scope.authorized = !$scope.authorized
  };
}

function NameController($scope) {
  $scope.name = "First";
}

function SecondNameController($scope) {
  $scope.name = "Second";
}

function ChildController($scope) {
  $scope.childName = "Child";
}

function InfoController($scope) {
  $scope.info = {name: "First"};
}

function ChildInfoController($scope) {
  $scope.info.childName = "Child";
}

function SumController($scope) {
  $scope.values = [1,2];
  $scope.newValue = 1;
  $scope.add = function() {
    $scope.values.push(parseInt($scope.newValue));
  };
  $scope.$watch('values', function () {
    $scope.sum = $scope.values.reduce(function(a, b) {
      return a + b;
    });
  }, true);
}


function EscapeController($scope, $element) {
  $scope.message = '';
  $element.bind('keyup', function (event) {
    if (event.keyCode === 27) { // esc key

      // Broken -- doesn't trigger UI update
      // $scope.message = '';
       $scope.$apply(function() {
        $scope.message = '';
      });
    }
  });
}