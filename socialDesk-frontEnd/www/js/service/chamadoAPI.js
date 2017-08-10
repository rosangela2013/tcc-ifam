
appService.factory('ChamadoAPI', function($http, constants){
    var api = {};
    var baseURL = constants.BASE_URL + "/chamado";

    ///////////////////////////
    api.list = list;
    api.listPorCategoria = listPorCategoria;
    api.listPorNomeUsuario = listPorNomeUsuario;
    api.excluir = excluir;
    api.salvar = salvar;
    
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

    function salvar(chamado) {
        return $http.post(baseURL, chamado);
    }

    return api;
});