app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95,
    },
  ];

$scope.mains = [
  {
    name: 'Pizza Pie',
    description: "the best in the city",
    price: 8.95
  },
  {
    name: "spaghetti",
    description: "a Lady and the Tramp take",
    price: 12.95,
  },
  {
    name: "antipasta",
    description: "not your regular pasta",
    price: 9.95,
  },
];

$scope.extras = [
  {
    name: 'Rolls',
    description: "warm and toasty",
    price: 3.95
  },
  {
    name: "french fries",
    description: "the classiest",
    price: 4.95,
  },
  {
    name: "onion rings",
    description: "put a ring on it",
    price: 4.95,
  },
];
}]);