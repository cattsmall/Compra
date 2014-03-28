var listApp = angular.module('listApp', []);
 
listApp.controller('listCtrl', function ($scope, userService) {
  // SET VARIABLES
	$scope.user = userService;	
	$scope.wantedItems = [
		{
			name: 'Shorts',
			minPrice: 12,
			maxPrice: 18,
			currency: 'USD'
		 }
	];
  
  $scope.defaultCurrency = "USD";
  $scope.defaultCurrencySign = "$";
  
  $scope.orderProp = 'age';
  $scope.addItem = false;
  $scope.newItem = {
    currency: $scope.defaultCurrency
  };
  
  $scope.totalMinPrice = 0;
  $scope.totalMaxPrice = 0;
  
  //--- FUNCTIONS
  $scope.addToList = function (item) {
    $scope.wantedItems.push(item);
    $scope.calculateTotalPrice();
    $scope.addItem = false;
    $scope.newItem = {
      currency: $scope.defaultCurrency
    };
  }
  
  $scope.setCurrency = function(item) {
    if (item.currency == "USD") {
      item.currencySign = "$";
    } else if (item.currency == "GBP") {
      item.currencySign = "£";
    } else if (item.currency == "EUR") {
      item.currencySign = "€";
    } else if (item.currency == "JPY") {
      item.currencySign = "¥";
    }
    return item;
  }
  
  angular.forEach( $scope.wantedItems, function( item ) {
    $scope.setCurrency(item);
  } );
  
  $scope.calculateTotalPrice = function() {
    $scope.totalMinPrice = 0;
    $scope.totalMaxPrice = 0;
    
    angular.forEach( $scope.wantedItems, function( item ) {
      $scope.totalMinPrice = $scope.totalMinPrice + parseInt(item.minPrice);
      $scope.totalMaxPrice = $scope.totalMaxPrice + parseInt(item.maxPrice);
    } );
  }

  $scope.calculateTotalPrice();
});