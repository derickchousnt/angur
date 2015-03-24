
function ItemsController($scope) {
  $scope.items = [
    {name: 'Item 1'},
    {name: 'Item 2'}
  ];
}

function ItemsController2($scope) {
  $scope.items = [
    {name: 'Item 1',
      items: [
       {name: 'Nested Item 1.1'},
       {name: 'Nested Item 1.2'}
      ]
    },
    {name: 'Item 2',
      items: [
       {name: 'Nested Item 2.1'},
       {name: 'Nested Item 2.2'}
      ]
    }
  ];
}

function ItemsController3($scope) {
  $scope.items = [
    {id: 1, name: 'Item 1'},
    {id: 2, name: 'Item 2'},
    {id: 3, name: 'Item 3'},
    {id: 4, name: 'Item 4'}
  ];

  $scope.destroy = function(item) {
    var index = $scope.items.indexOf(item);
    $scope.items.splice(index, 1);
  };
}