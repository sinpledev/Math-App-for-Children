'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
    $scope.numberArray = math.makeNumberArray();
    $scope.marking = function() {
		$scope.numberArray = math.marking( $scope.numberArray, '+' );
    };
}])

.directive('plusQuestions', function() {
	return {
		template: '{{ number.num1 }} + {{ number.num2 }} = <input type="number" ng-model="answer">{{ answer }} : {{ number.correct }}' +
				'<div ng-show="answer == number.correct">O</div><div ng-show="(answer != number.correct) || (answer.length == 0)">X</div>'
	};
})
.directive('minusQuestions', function() {
	return {
		template: '{{ number.num1 }} − {{ number.num2 }} = <input type="number" ng-model="answer">{{ answer }}'
	};
})
.directive('multiplyQuestions', function() {
	return {
		template: '{{ number.num1 }} × {{ number.num2 }} = <input type="number" ng-model="answer">{{ answer }}'
	};
})
.directive('divisionQuestions', function() {
	return {
		template: '{{ number.num1 }} ÷ {{ number.num2 }} = <input type="number" ng-model="answer">{{ answer }}'
	};
})
