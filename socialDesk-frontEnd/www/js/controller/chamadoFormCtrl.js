appCtrl.controller('ChamadoFormCtrl', function($scope, $location, $state, $ionicModal, $stateParams, $ionicPopup, ChamadoAPI, FotoUsuarioAPI){
    
      $scope.idChamado;
      $scope.chamados = [];
      init();
    

      $scope.chamado = {};
    
      $scope.arquivo = {};
    
      $scope.listComentario = {};
    
      function init() {
       
        var idChamado = $stateParams.id;
        $scope.idChamado = idChamado;

        $scope.titulo = idChamado ? 'Editar chamado' : 'Criar chamado';

        $scope.dataAtual = new Date();
        var usuario = JSON.parse(localStorage.usuario);
        $scope.usuarioLogado = usuario;
        //Recupera foto de usuário através do parâmetro usuario.id;
        FotoUsuarioAPI.getByUsuario(usuario.id)
        .then(function(response){
          $scope.fotoUsuarioLogado = response.data;
        });

        if (idChamado) {
           ChamadoAPI.load(idChamado).then(function(response) {
            var chamado =  response.data;

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

         if (idChamado) {
           var payload = {
             descricao : $scope.chamado.descricao,
             categoria: {id: $scope.chamado.idCategoria} 
            };
            ChamadoAPI.atualizar(idChamado, payload)
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
         } else {
            ChamadoAPI.salvar($scope.chamado)
              .then(
              function(response) {
                $state.go('menu.meus-chamados');
                
              }
            ).catch(function(erro){
            $ionicPopup.alert({
                    title: 'Erro',
                    template: erro.data[0].message
                  }).then(function(){
                    
                  });
            });
         }
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