appService.factory('ComentarioAPI', function($http, constants){
    var api = {};
    var baseURL = constants.BASE_URL + "/comentario";


function listarComentarios(idChamado) {
    return $http.get(baseURL + "/listarComentarios/"+idChamado);
}

});