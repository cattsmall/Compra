var listApp = angular.module('listApp', []);
 
listApp.controller('listCtrl', function ($scope, userService, $timeout) {
  // SET VARIABLES
  $scope.showIntroScreen = true;
	$scope.user = userService;	
	$scope.wantedItems = [];
  
  $scope.defaultCurrency = "USD";
  $scope.defaultCurrencySign = "$";
  
  $scope.orderProp = 'age';
  $scope.addItem = false;
  $scope.newItem = {
    currency: $scope.defaultCurrency
  };
  
  $scope.totalMinPrice = 0;
  $scope.totalMaxPrice = 0;
  
  $scope.boughtItems = 0;
  
  //--- FUNCTIONS
  $scope.toggleIntroScreen = function() {
    if ( $scope.showIntroScreen ) {
      $scope.showIntroScreen = false;
    } else {
      $scope.showIntroScreen = true;
    }
  }
  
 $timeout($scope.toggleIntroScreen, 2000);
  
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
  
  $scope.toggleBought = function(item) {
    if (!item.bought) {
      item.bought = true;
      $scope.boughtItems++;
    } else {
      item.bought = false;
      $scope.boughtItems--;
    }
    return item;
  }
  $scope.clearBoughtItems = function() {
    angular.forEach( $scope.wantedItems, function( item ) {
      if (item.bought) {
        item.toRemove = true;
        $timeout($scope.deleteBoughtItems, 500);
        console.log("oh");
      }
    } );
  }
  
  $scope.subtractBoughtItems = function() {
    $scope.boughtItems--;
    $scope.calculateTotalPrice();
  }
  
  $scope.deleteBoughtItems = function() {
    angular.forEach( $scope.wantedItems, function( item ) {
      if (item.toRemove) {
        $scope.wantedItems.splice($scope.wantedItems.indexOf(item), 1);
        $timeout($scope.subtractBoughtItems, 500);
        console.log("yay");
      }
    } );
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
  
  $scope.isEmpty = function(value) {
    if (angular.isUndefined(value) || value === '' || value === null || value !== value) {
      return true;
    } else {
      return false;
    }
  }
});