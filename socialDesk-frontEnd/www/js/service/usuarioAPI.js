appService.factory("UsuarioAPI",
    ['$http', 'constants', function ($http, constants) {

        var _cadastro = function(usuario) {
            return $http.post(constants.BASE_URL + "/usuarios", usuario);
        };

        var _getUsuarioLogado = function() {
            return angular.json(window.localStorage.getItem('usuario'));
        }

        return {
            cadastro: _cadastro,
            getUsuarioLogado: _getUsuarioLogado
        };

    }]);
    