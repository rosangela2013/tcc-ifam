appCtrl.controller('ChamadoCtrl', function ($scope, $location, $state, $ionicPopup, ChamadoAPI, FotoUsuarioAPI, $ionicModal) {

    $scope.chamados = [];
    init();

    $scope.chamado = {};

    $scope.arquivo = {};

    $scope.listComentario = {};

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

    $scope.atualizaQtdeLike = function (chamado) {
        ChamadoAPI.atualizaQtdeLike(chamado)
            .then(
            init
            );
    }

    $scope.edit = function (id) {
        $location.path("/menu/criar-chamados/" + id);
    }

    $scope.getImage = function (data, optSrc) {
        if (data) {
            return 'data:image/jpeg;base64,' + data;
        } else {
             return optSrc;
        }
    }


    /* $scope.salvar = function(arquivo) {
      var usuario = JSON.parse(localStorage.usuario);
      $scope.chamado.idUsuario = usuario.id;
  
       $scope.chamado.foto = arquivo.base64;
       ChamadoAPI.salvar($scope.chamado)
         .then(
        function(response) {
            $state.go('menu.chamados');
           
        }
      ).catch(function(erro){
      $ionicPopup.alert({
              title: 'Erro',
              template: erro.data[0].message
            }).then(function(){
              
            });
      });
    } */

    $scope.salvarComentario = function (comentario) {
        var usuario = JSON.parse(localStorage.usuario);
        $scope.comentario = comentario;
        $scope.comentario.usuario = {};
        $scope.comentario.usuario.id = usuario.id;

        ChamadoAPI.salvarComentario($scope.comentario)
            .then(
            function (response) {
                ChamadoAPI.loadComComentarios($scope.comentario.chamado.id)
                    .then(
                    function (response) {
                        $scope.listComentario = response.data.listComentario;
                        $scope.comentario.descricao = "";
                    }
                    );
                //Ajustar atualização de listagem de comentários
                // $state.go('menu.chamados');

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

    /*$scope.handleFiles = function(foto){
      ChamadoAPI.salvarArquivoChamado(chamado.foto);
    }*/

    $ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function (listComentario, chamado) {
        $scope.listComentario = listComentario;
        $scope.comentario = {};
        $scope.comentario.chamado = chamado;
        $scope.modal.show();
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