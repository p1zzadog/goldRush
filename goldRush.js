//Setting an Angular module: goldRushApp
angular.module ('goldRushApp',[])

//Defining the Controller function: mainControllerFunc
var mainControllerFunc = function ($scope) {
	$scope.positionArray = []
	$scope.xPosition = 0
	$scope.yPosition = 0

	$scope.mapClick = function (event) {
		var goldLocation = {
			xposition: $scope.xPosition = (event.pageX - 24),
			yposition: $scope.yPosition = (event.pageY - 24),
			comments: '',
		} 
		$scope.positionArray.push(goldLocation)
		console.log($scope.positionArray[event])
		console.log($scope.positionArray)
	}

}

//Registering the controller: mainController
angular.module('goldRushApp').controller('mainController',['$scope',mainControllerFunc])