appService.factory("UsuarioAPI",
    ['$http', 'constants', function ($http, constants) {

        var _cadastro = function(usuario) {
            return $http.post(constants.BASE_URL + "/usuarios", usuario);
        };

        return {
            cadastro: _cadastro
        };

    }]);
    