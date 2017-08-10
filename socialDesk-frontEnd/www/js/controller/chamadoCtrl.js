appCtrl.controller('ChamadoCtrl', function($scope, $location, $state, $ionicPopup, ChamadoAPI){

  $scope.chamados = [];
  init();

  $scope.chamado = {};

  function init() {
    ChamadoAPI.list()
    .then(function(response){
      $scope.chamados = response.data;
    });
  }

  $scope.edit = function(id) {
    $location.path("/menu/criar-chamados");
  }

  $scope.salvar = function(chamado) {
    var usuario = JSON.parse(localStorage.usuario);
    chamado.idUsuario = usuario.id;
     
     ChamadoAPI.salvar(chamado)
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
  }

   $scope.excluir = function(id) {
    ChamadoAPI.excluir(id)
      .then(init);
  }

})