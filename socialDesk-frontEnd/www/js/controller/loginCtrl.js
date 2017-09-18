
appCtrl.controller('AppCtrl', function ($rootScope, $scope, $ionicModal, $ionicPopup, $timeout, $location, $state, LoginAPI) {

    $scope.loginData = {};

    // Crie o modo de login que usaremos mais tarde
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });


    //Ativado no modo de login para fechá-lo 
    $scope.closeLogin = function () {
        $scope.modal.hide();
    };

    // Abra o modo de login
    $scope.login = function () {
        // $scope.modal.show();
    };
  

    // Execute a ação de login quando o usuário envia o formulário de login
    $scope.doLogin = function (loginData) {
        LoginAPI.login(loginData).then(
            function (response) {
                window.localStorage.setItem('usuario', JSON.stringify(response.data));
                $rootScope.usuarioLogado = response.data;
                $state.go('menu.meus-chamados');
            }
        ).catch(function (erro) {
            $ionicPopup.alert({
                title: 'Login inválido',
                template: 'Usuário ou senha inválidos'
            }).then(function () {
            });
            console.log(status);
        });

        appCtrl.controller('EsqueceuSenhaCtrl', function ($scope) {
        });
    };
});
