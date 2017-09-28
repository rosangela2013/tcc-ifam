appCtrl.controller('ChamadoFormCtrl', function($scope, $location, $state, $ionicModal, $stateParams, $ionicPopup, ChamadoAPI, FotoUsuarioAPI){
    
      $scope.idChamado;
      $scope.chamados = [];
      init();
    

      $scope.chamado = {};
    
      $scope.arquivo = {};
    
      $scope.listComentario = {};
    
      function init() {
        // alert($stateParams.chamado.idChamado);
        var idChamado = $stateParams.id;
        $scope.idChamado = idChamado;

        $scope.titulo = idChamado ? 'Editar chamado' : 'Criar chamado';

        $scope.dataAtual = new Date();
        var usuario = JSON.parse(localStorage.usuario);
        $scope.usuarioLogado = usuario;
        //Recupera foto de usuário através do parâmetro usuario.id;
      /*   FotoUsuarioAPI.getByUsuario(usuario.id)
        .then(function(response){
          $scope.fotoUsuarioLogado = response.data;
        }); */

        if (idChamado) {
           ChamadoAPI.load(idChamado).then(function(response) {
            var chamado =  response.data;

            $scope.fotoUsuarioLogado = chamado.usuario.foto;

            $scope.chamado = {
                idCategoria : chamado.categoria.id,
                descricao: chamado.descricao
            };
          });
        }

      }
    
      $scope.getImage = function(data){
        if (data){
          return 'data:image/jpeg;base64,' + data;
        } else {
         //TODO Corrigir retorno
          return false;
        }
     }
    
      
      $scope.salvar = function(arquivo) {
        var usuario = JSON.parse(localStorage.usuario);
        $scope.chamado.idUsuario = usuario.id;
    
         $scope.chamado.foto = arquivo.base64;

         var idChamado = $scope.idChamado;
        $scope.chamado.idChamado = idChamado;

        ChamadoAPI.salvar($scope.chamado).then(
          function(response) {
            $state.go('menu.meus-chamados');
          }, 
          function(error) {
            $ionicPopup.alert({
              title: 'Erro',
              template: error.data[0].message
            });
          }
        );
      }
    
      $ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });
      $scope.openModal = function(listComentario,chamado) {
        $scope.listComentario = listComentario;
        $scope.comentario = {};
        $scope.comentario.chamado = chamado;
        $scope.modal.show();
      };
      $scope.closeModal = function() {
        $scope.modal.hide();
      };
      // Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function() {
        $scope.modal.remove();
      });
      // Execute action on hide modal
      $scope.$on('modal.hidden', function() {
        // Execute action
      });
      // Execute action on remove modal
      $scope.$on('modal.removed', function() {
        // Execute action
      });
    
    })