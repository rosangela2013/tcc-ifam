appCtrl.controller('CategoriaCtrl', function($scope, CategoriaAPI) {
  $scope.categorias = [];

  init();

  function init() {
    CategoriaAPI.list()
      .then(function(response){
        $scope.categorias = response.data;
      })
  }
})

