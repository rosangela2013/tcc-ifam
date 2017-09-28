
appService.factory('ChamadoAPI', function($http, constants){
    var api = {};
    var baseURL = constants.BASE_URL + "/chamado";

    ///////////////////////////
    api.load = load;
    api.list = list;
    api.listPorCategoria = listPorCategoria;
    api.listPorNomeUsuario = listPorNomeUsuario;
    api.listPorUsuario = listPorUsuario;
    api.excluir = excluir;
    api.salvar = salvar;
    api.salvarComentario = salvarComentario;
    api.loadComComentarios = loadComComentarios;
    api.curtir = curtir;
    api.encerrar = encerrar;
    
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
        return $http.get(baseURL + "/listPorNomeUsuario/"+nomeUsuario);
    }

    function listPorUsuario(id) {
        return $http.get(baseURL + "/listPorUsuario/"+id);
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

    function curtir(idChamado) {
        return $http.put(baseURL + "/curtir/" + idChamado);
    };

    function encerrar(idChamado) {
        return $http.put(baseURL + "/fecharChamado/" + idChamado);
    };

    return api;
});