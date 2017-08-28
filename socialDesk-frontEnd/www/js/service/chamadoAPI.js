
appService.factory('ChamadoAPI', function($http, constants){
    var api = {};
    var baseURL = constants.BASE_URL + "/chamado";

    ///////////////////////////
    api.load = load;
    api.list = list;
    api.listPorCategoria = listPorCategoria;
    api.listPorNomeUsuario = listPorNomeUsuario;
    api.excluir = excluir;
    api.salvar = salvar;
    api.salvarComentario = salvarComentario;
    
    ///////////////////////////


    function load(idChamado) {
        return $http.get(baseURL + "/" + idChamado);
    }

    function loadComComentarios(idChamado) {
        return $http.get(baseURL + "/comComentarios/" + idChamado);
    }

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
    };

    function salvarArquivoChamado(arquivoChamado){
        return  $http.post(constants.BASE_URL + "/arquivoChamado", arquivoChamado);
    };

    function salvarComentario(comentario) {
        return $http.post(baseURL + "/comentario", comentario);
    };


    return api;
});