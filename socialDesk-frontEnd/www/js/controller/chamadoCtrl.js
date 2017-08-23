appCtrl.controller('ChamadoCtrl', function($scope, $location, $state, $ionicPopup, ChamadoAPI, $ionicModal){

  $scope.chamados = [];
  init();

  $scope.chamado = {};

  $scope.arquivo = {};

  function init() {
     ChamadoAPI.list()
    .then(function(response){
      $scope.chamados = response.data;
    });
  }

  $scope.edit = function(id) {
    $location.path("/menu/criar-chamados");
  }

  $scope.getImage = function(data){
    return 'data:image/jpeg;base64,' + data;
 }

  
  $scope.salvar = function(arquivo) {
    var usuario = JSON.parse(localStorage.usuario);
    $scope.chamado.idUsuario = usuario.id;

     $scope.chamado.foto = arquivo.base64;
     ChamadoAPI.salvar($scope.chamado)
       .then(
      function(response) {
          //$state.go('menu.chamados');
         
      }
    ).catch(function(erro){
    $ionicPopup.alert({
            title: 'Erro',
            template: erro.data[0].message
          }).then(function(){
            
          });
    });
  }

   $scope.excluir = function(id) {
    ChamadoAPI.excluir(id)
      .then(init);
  }

  /*$scope.handleFiles = function(foto){
    ChamadoAPI.salvarArquivoChamado(chamado.foto);
  }*/

  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function(listComentario) {
    $scope.listComentario = listComentario;
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