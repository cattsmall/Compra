var listApp = angular.module('listApp', []);
 
listApp.controller('listCtrl', function ($scope, userService) {
	$scope.user = userService;	
	$scope.wantedItems = [
		{
			'name': 'Shorts',
			'minPrice': 0,
			'maxPrice': 1,
			'currency' : "USD"
		 },
		{
			'name': 'Motorola XOOM™ with Wi-Fi',
			'minPrice': 0,
			'maxPrice': 1,
			'currency' : "JPY"
		 },
		{
			'name': 'MOTOROLA XOOM™',
			'minPrice': 0,
			'maxPrice': 1,
			'currency' : "EUR"
		 },
		{
			'name': 'Fancy shoes',
			'minPrice': 0,
			'maxPrice': 1,
			'currency' : "GBP"
		 }
	];
 
  $scope.orderProp = 'age';
});