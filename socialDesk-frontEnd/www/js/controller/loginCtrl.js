
appCtrl.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location, $state, LoginAPI) {

  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    // $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function(loginData) {
    console.log("entrou1");
    LoginAPI.login(loginData).then(
      function(response) {
        console.log("entrou2");
      }
    );

    // var login = 'teste';
    // var senha = '123';

    // if(!loginData){
    //   alert("Preencha os campos para fazer o login");
    // }

    // if(!loginData.password || !loginData.username ){
    //   alert("Preencha os campos ");
    // }

    // /*if(loginData.password  != senha){
    //   alert("Senha invalido ");
    // }

    // if(loginData.login  != login){
    //   alert("Login invalido ");
    // }*/

    // if(loginData.username == login && loginData.password == senha){
    //   $state.go("menu.chamados");
    // }

    // // Simulate a login delay. Remove this and replace with your login
    // // code if using a login system
    // $timeout(function() {
    //   $scope.closeLogin();
    // }, 1000);
  };
});