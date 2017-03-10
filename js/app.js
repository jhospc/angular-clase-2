
var app = angular.module('miapp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})
		.when('/accounts', {
			templateUrl: 'views/accounts.html',
			controller: 'AccountsController'
		})
		.when('/add-account', {
			templateUrl: 'views/add-account.html',
			controller: 'AddAccountController'
		})
		.otherwise('/');

	$locationProvider.hashPrefix("");
});

app.service('AccountService',function(){
	var accounts = [
		{ id:1, firstname: 'Edmundo', lastname: 'Acosta', mail: 'eacosta@atypax.net', accountNumber:'189-123123123-1', amount:'8000.99', currency:'USD$' },
		{ id:2, firstname: 'Richard', lastname: 'Solis', mail: 'rsolis@atypax.net', accountNumber:'189-123123896-1', amount:'1.01', currency:'S/.' },
		{ id:3, firstname: 'Esteban', lastname: 'Torres', mail: 'etorres@atypax.net', accountNumber:'189-123223123-1', amount:'999999.99', currency:'USD$' },
		{ id:4, firstname: 'Erving', lastname: 'Córdova', mail: 'ecordova@atypax.net', accountNumber:'189-789987666-1', amount:'533.34', currency:'S/.' }
	];

	function getAccounts(){
		return accounts;
	}
	retunr{
		listar: getAccounts
	}
});

app.controller('MainController', function($scope){

	$scope.showmenu =false;
	$scope.toggleMenu = function(){
		$scope.showmenu = !$scope.showMenu;

	}
});

app.controller('HomeController', function($scope){

});

app.controller('AccountsController', 
	function($scope, AccountService){
		$scope.lista = AccountService.listar();

	
});

app.controller('AddAccountController', function($scope){
	
});

app.directive('a', function(){
	return {
		restrict: 'E',
		link: function(scope, elem, attr){
			if(attr.href === '' || attr.href === '#'){
				elem.on('click', function(e){
					e.preventDefault();
				});
			}
		}
	}
});


app.filter('reverse', function(){
	return function(input){
		var salida ='';
		for(var i = 0; i < input.length; i++){
			salida = input.charAt(i) + salida;
		}
		return salida;
	}
});
















