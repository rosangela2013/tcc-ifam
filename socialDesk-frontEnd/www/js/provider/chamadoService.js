
appService.factory('ChamadoService', function(ChamadoAPI){
    var self = {};

    function ehDoUsuario(idUsuario, chamado) {
        return idUsuario === chamado.usuario.id;
    }

    self.exibeEditar = function(idUsuario, chamado) {
        return ehDoUsuario(idUsuario, chamado) && chamado.status == 'Aberto';
    };

    self.exibeFechar = function(idUsuario, chamado) {
        return ehDoUsuario(idUsuario, chamado) && chamado.comentarios == 0;
    };

    self.exibeEncerrar = function(idUsuario, chamado) {
        return ehDoUsuario(idUsuario, chamado) && chamado.comentarios > 0 && chamado.status != 'Fechado';
    };

    return self;
});