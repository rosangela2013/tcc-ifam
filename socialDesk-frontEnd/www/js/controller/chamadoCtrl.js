appCtrl.controller('ChamadoCtrl', function ($scope, $location, $state, $ionicPopup, ChamadoService, ImagemService, ChamadoAPI, FotoUsuarioAPI, ComentarioAPI, $ionicModal) {

    $scope.chamados = [];
    init();

    $scope.chamado = {};

    $scope.arquivo = {};

    $scope.listComentario = [];
    

    function init() {
        $scope.loading = true;
        $scope.dataAtual = new Date();
        var usuario = JSON.parse(localStorage.usuario);
        $scope.usuarioLogado = usuario;
        //Recupera foto de usuário através do parâmetro usuario.id;
        FotoUsuarioAPI.getByUsuario(usuario.id)
            .then(function (response) {
                $scope.fotoUsuarioLogado = response.data;
            });


        $scope.pesquisar = function (filtro) {
            $scope.loading = true;
            $scope.mensagemAviso = "";
            var promise =  filtro ?  ChamadoAPI.listPorNomeUsuario(filtro)  
            
                        :  ChamadoAPI.list();


            promise
                .then(function (response) {
                    $scope.chamados = response.data;
                    $scope.loading = false;
                    if ($scope.chamados.length == 0){
                        $scope.mensagemAviso = 'Não há chamados criados por este usuário.';
                    } else {
                        $scope.mensagemAviso = "";
                    }
                }, function(error) {
                    $scope.loading = false;
                    console.log("Erro");
                });
        }


        ChamadoAPI.list()
            .then(function (response) {
                $scope.chamados = response.data;
                $scope.loading = false;
            });
    }

    $scope.exibeIconeResolvido = function(chamado) {
        return chamado.status == 'Fechado';
    };

    $scope.exibeEditar = function(chamado) {
        var idUsuario = JSON.parse(localStorage.usuario).id;
        return ChamadoService.exibeEditar(idUsuario, chamado);
    };

    $scope.exibeFechar = function(chamado) {
        var idUsuario = JSON.parse(localStorage.usuario).id;
        return ChamadoService.exibeFechar(idUsuario, chamado);
    };

    $scope.exibeEncerrar = function(chamado) {
        var idUsuario = JSON.parse(localStorage.usuario).id;
        return ChamadoService.exibeEncerrar(idUsuario, chamado);
    };

    $scope.curtir = function (idChamado) {
        ChamadoAPI.curtir(idChamado)
            .then(
            init
            );
    }

    $scope.edit = function (id, chamado) {
        $location.path("/menu/criar-chamados/" + id);
    }

    $scope.getImage = function (data, optSrc) {
        if (data) {
            return 'data:image/jpeg;base64,' + data;
        } else {
             return optSrc;
        }
    }

    $scope.salvarComentario = function (comentario) {
        var usuario = JSON.parse(localStorage.usuario);
        var chamado = $scope.chamado;
        $scope.comentario = comentario;
        $scope.comentario.usuario = {};
        $scope.comentario.usuario.id = usuario.id;

        ChamadoAPI.salvarComentario($scope.comentario)
            .then(
            function (response) {

                $scope.comentario = {};
                $scope.comentario.chamado = {id: chamado.idChamado};
                ComentarioAPI.listarComentarios(chamado.idChamado).then(function(response) {
                    $scope.listComentario = response.data;
                });

            }
            ).catch(function (erro) {
                $ionicPopup.alert({
                    title: 'Erro',
                    template: erro.data[0].message
                }).then(function () {

                });
            });
    }

    $scope.excluir = function (id) {
        ChamadoAPI.excluir(id)
            .then(init);
    }

    $scope.encerrar = function(id) {
        ChamadoAPI.encerrar(id).then(init);
    };

    $ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function (listComentario, chamado) {
        $scope.chamado = chamado;
        $scope.comentario = {};
        $scope.comentario.chamado = {id: chamado.idChamado};
        ComentarioAPI.listarComentarios(chamado.idChamado).then(function(response) {
            $scope.listComentario = response.data;
            $scope.modal.show();
        });
    };

    $scope.closeModal = function () {
        $scope.modal.hide();
    };

    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.modal.remove();
    });

    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
        // Execute action
    });

    // Execute action on remove modal
    $scope.$on('modal.removed', function () {
        // Execute action
    });

})