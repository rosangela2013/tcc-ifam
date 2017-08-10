
appService.factory('ChamadoAPI', function($http, constants){
    var api = {};
    var baseURL = constants.BASE_URL + "/chamado";

    ///////////////////////////
    api.list = list;
    api.listPorCategoria = listPorCategoria;
    api.listPorNomeUsuario = listPorNomeUsuario;
    api.excluir = excluir;
    
    ///////////////////////////


    function list() {
        return $http.get(baseURL);
    }

    function listPorCategoria(categoria) {
        return $http.get(baseURL + "/listPorCategoria/"+categoria);
    }

    function listPorNomeUsuario(nomeUsuario) {
        return $http.get(baseURL + "/listPorNomeUsuario/"+nomeUsuario)
    }

    function excluir(id) {
        return $http.delete(baseURL + "/"+id);
    }

    return api;
})
.factory('CategoriaAPI', function($http, constants){
     var api = {};
    var baseURL = constants.BASE_URL + "/categoria";

    ///////////////////////////
    api.list = list;

    ///////////////////////////


    function list() {
        return $http.get(baseURL);
    }

    return api;
});