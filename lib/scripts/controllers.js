var listApp = angular.module('listApp', []);

listApp.controller('listCtrl', function ($scope, userService, $timeout) {
  // SET VARIABLES
  $scope.showIntroScreen = true;
	$scope.user = userService;
	$scope.wantedItems = [];

  var wantedItemsString = JSON.parse(window.localStorage.getItem('wantedItems'));

  if (wantedItemsString != null) {
    $scope.wantedItems = wantedItemsString;
  }

  var showSettings = window.localStorage.getItem('showSettings');
  if (showSettings != null) {
    $scope.showSettings = showSettings;
  }

  window.localStorage.getItem('defaultCurrency') ? $scope.defaultCurrency = window.localStorage.getItem('defaultCurrency') : $scope.defaultCurrency = "USD";
  window.localStorage.getItem('defaultCurrencySign') ? $scope.defaultCurrencySign = window.localStorage.getItem('defaultCurrencySign') : $scope.defaultCurrencySign = "$";

  $scope.orderProp = 'age';
  $scope.addItem = false;
  $scope.newItem = {
    currency: $scope.defaultCurrency
  };

  $scope.totalMinPrice = 0;
  $scope.totalMaxPrice = 0;

  window.localStorage.getItem('boughtItems') ? $scope.boughtItems = window.localStorage.getItem('boughtItems') : $scope.boughtItems = 0;
  //--- FUNCTIONS

  $scope.addToList = function (item) {
    $scope.wantedItems.push(item);

    var wantedItemsString = JSON.stringify($scope.wantedItems);
    window.localStorage.setItem('wantedItems', wantedItemsString);

    $scope.calculateTotalPrice();
    $scope.addItem = false;
    $scope.newItem = {
      currency: $scope.defaultCurrency
    };
  }

  $scope.toggleBought = function(item) {
    if (!item.bought) {
      item.bought = true;
      $scope.boughtItems++;
    } else {
      item.bought = false;
      $scope.boughtItems--;
    }

    var wantedItemsString = JSON.stringify($scope.wantedItems);
    window.localStorage.setItem('wantedItems', wantedItemsString);
    window.localStorage.setItem('boughtItems', $scope.boughtItems);
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

    var wantedItemsString = JSON.stringify($scope.wantedItems);
    window.localStorage.setItem('wantedItems', wantedItemsString);
  }

  $scope.subtractBoughtItems = function() {
    $scope.boughtItems--;
    $scope.calculateTotalPrice();
    window.localStorage.setItem('boughtItems', $scope.boughtItems);
  }

  $scope.deleteBoughtItems = function() {
    angular.forEach( $scope.wantedItems, function( item ) {
      if (item.toRemove) {
        $scope.wantedItems.splice($scope.wantedItems.indexOf(item), 1);
        $timeout($scope.subtractBoughtItems, 500);
        console.log("yay");
      }
    } );

    var wantedItemsString = JSON.stringify($scope.wantedItems);
    window.localStorage.setItem('wantedItems', wantedItemsString);
  }

  $scope.calculateTotalPrice = function() {
    $scope.totalMinPrice = 0;
    $scope.totalMaxPrice = 0;

    angular.forEach( $scope.wantedItems, function( item ) {
      $scope.totalMinPrice = $scope.totalMinPrice + parseInt(item.minPrice);
      $scope.totalMaxPrice = $scope.totalMaxPrice + parseInt(item.maxPrice);
    } );
  }

  $scope.calculateTotalPrice();

  $scope.toggleSettings = function() {
    if ($scope.showSettings == true) {
      $scope.showSettings = false;
      window.localStorage.setItem('showSettings', $scope.showSettings);
    } else {
      $scope.showSettings = true;
    }
  }

  $scope.setCurrency = function(currency) {
    $scope.defaultCurrency = currency;

    if ($scope.defaultCurrency == "USD") {
      $scope.defaultCurrencySign = "$";
    } else if ($scope.defaultCurrency == "GBP") {
      $scope.defaultCurrencySign = "£";
    } else if ($scope.defaultCurrency == "EUR") {
      $scope.defaultCurrencySign = "€";
    } else if ($scope.defaultCurrency == "JPY") {
      $scope.defaultCurrencySign = "¥";
    }
    window.localStorage.setItem('defaultCurrency', $scope.defaultCurrency);
    window.localStorage.setItem('defaultCurrencySign', $scope.defaultCurrencySign);
  }

  $scope.isEmpty = function(value) {
    if (angular.isUndefined(value) || value === '' || value === null || value !== value) {
      return true;
    } else {
      return false;
    }
  }
});