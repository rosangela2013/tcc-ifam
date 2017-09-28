appService.factory('ComentarioAPI', function($http, constants){
    var api = {};
    var baseURL = constants.BASE_URL + "/comentario";

    api.listarComentarios = function(idChamado)  {
        return $http.get(baseURL + "/idChamado/"+idChamado);
    }

    return api;

});
