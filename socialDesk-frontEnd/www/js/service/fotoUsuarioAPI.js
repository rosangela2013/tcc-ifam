
appService.factory('FotoUsuarioAPI', function($http, constants){
    var api = {};
    var baseURL = constants.BASE_URL + "/fotoUsuario";

    ///////////////////////////
    api.list = list;
    api.getByUsuario = getByUsuario;
    
    ///////////////////////////


    function list() {
        return $http.get(baseURL);
    }

    function getByUsuario(idUsuario) {
        return $http.get(baseURL + "/getByUsuario/"+idUsuario)
    }


    return api;
});