// angular.module('starter.services', [])
// .factory('ChamadoAPI', function($http, constants){
//     var api = {};
//     var baseURL = constants.BASE_URL + "/chamado";

appService.factory("LoginAPI",
			['$http','constants',function($http,constants){

	var _login = function(credencial){
		return $http.post(constants.BASE_URL +"/auth/login",credencial);
	};

	// var _trocaSenha = function(credencial){
	// 	return $http.post(constants.BASE_URL+"/trocasenha",credencial);
	// };

	// var _novaSenha = function(credencial){
	// 	return $http.post(constants.BASE_URL+"/novasenha",credencial);
	// };

	return {
		login: _login
		// trocaSenha: _trocaSenha,
		// novaSenha: _novaSenha
	};

}]);