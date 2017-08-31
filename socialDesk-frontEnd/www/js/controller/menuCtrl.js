appCtrl.controller('MenuCtrl', function ($rootScope) {
    $rootScope.usuarioLogado =  JSON.parse(window.localStorage.getItem('usuario'));
});    