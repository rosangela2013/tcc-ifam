appCtrl
.controller('EsqueceuSenhaCtrl', function($scope) {
 
})
.controller('ChamadoCtrl', function($scope, $location, ChamadoAPI){

  $scope.chamados = [];
  init();

  function init() {
    ChamadoAPI.list()
    .then(function(response){
      $scope.chamados = response.data;
    });
  }

  $scope.edit = function(id) {
    $location.path("/menu/criar-chamados");
  }

   $scope.excluir = function(id) {
    ChamadoAPI.excluir(id)
      .then(init);
  }

})
.controller('CategoriaCtrl', function($scope, CategoriaAPI) {
  $scope.categorias = [];

  init();

  function init() {
    CategoriaAPI.list()
      .then(function(response){
        $scope.categorias = response.data;
      })
  }

});