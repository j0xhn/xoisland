'use strict';
angular.module('xoisland', [
	//'ngRoute'
])

angular.module('xoisland').controller('faqController',
	[ '$scope'
	, '$window'
	, '$http'
	, function ($scope, $window, $http) {
		var FAQ = this;

		FAQ.test = "angular is working";
		FAQ.questions =[
			{
				title:'what',
				content:'its an island duh'
			},
			{
				title:'when',
				content:'by next year'
			}
		]
	}]
)

