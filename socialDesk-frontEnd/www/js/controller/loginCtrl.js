
appCtrl.controller('AppCtrl', function($scope, $ionicModal,$ionicPopup, $timeout, $location, $state, LoginAPI) {

  $scope.loginData = {};

  // Crie o modo de login que usaremos mais tarde
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  
  //Ativado no modo de login para fechá-lo 
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Abra o modo de login
  $scope.login = function() {
    // $scope.modal.show();
  };

  // Execute a ação de login quando o usuário envia o formulário de login
  $scope.doLogin = function(loginData) {
    console.log("entrou1");
    LoginAPI.login(loginData).then(
      function(response) {
         window.localStorage.setItem('usuario',JSON.stringify(response.data));
         $state.go('menu.chamados');
         
      }
    ).catch(function(erro){
    $ionicPopup.alert({
            title: 'Erro',
            template: erro.data
          }).then(function(){
            
          });
    });

  appCtrl
.controller('EsqueceuSenhaCtrl', function($scope) {
 
})
  };
});