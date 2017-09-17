appCtrl.controller('UsuarioCtrl', function ($scope, $location, $state, $ionicPopup, UsuarioAPI) {

    $scope.salvar = function(usuario,arqFoto){
        usuario.foto = arqFoto && arqFoto.base64;

        UsuarioAPI.cadastro(usuario).then(function() {
            console.log("salvou");
            $ionicPopup.alert({
                title: 'Cadastro realizado',
                template: 'Usuário cadastrado com sucesso!'
            }).then(function(){    
                $state.go('app.login');
            });
        });
    }; 

});
