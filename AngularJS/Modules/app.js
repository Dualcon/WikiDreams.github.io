var app = angular.module('MyApp', ['ngRoute']);

//Routes configuration
app.config(function($routeProvider) {
	$routeProvider

	// Main page
	.when('/', {
		templateUrl : 'AngularJS/Views/main.html',
		controller  : 'MainController'
	})

	.otherwise({ redirectTo: '/' });

});
