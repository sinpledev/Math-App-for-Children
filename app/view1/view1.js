'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
    $scope.operator = '+';
    $scope.numberArray = math.makeNumberArray($scope.operator);
    $scope.showAlertFlag = false;
    $scope.showMarkingBtnFlag = true;
    $scope.marking = function() {
		$scope.showAlertFlag = true;
		$scope.numberArray = math.marking( $scope.numberArray, $scope.operator );
        $scope.showMarkingBtnFlag = false;
    };
    $scope.reset = function( operator ) {
        $scope.operator = operator;
        $scope.numberArray = math.makeNumberArray();
        $scope.showAlertFlag = false;
        $scope.showMarkingBtnFlag = true;
    }

}])

.directive('plusQuestions', function() {
	return {
		templateUrl: 'view1/question_tpl.html'
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
