angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
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
    var login = 'teste';
    var senha = '123';

    if(!loginData){
      alert("Preencha os campos para fazer o login");
    }

    if(!loginData.password || !loginData.username ){
      alert("Preencha os campos ");
    }

    /*if(loginData.password  != senha){
      alert("Senha invalido ");
    }

    if(loginData.login  != login){
      alert("Login invalido ");
    }*/

    if(loginData.username == login && loginData.password == senha){
        $location.path("app/chamados");
    }

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})
.controller('EsqueceuSenhaCtrl', function($scope) {
 
})
.controller('ChamadoCtrl', function($scope){
  $scope.chamados = [
    {img: "https://scontent.ffor2-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160/p160x160/15823641_208018049659163_2387002030826468707_n.jpg?oh=57c9f0cd2253a4fe73363cdf4219e53c&oe=5913688D",
     assunto:'Impressora',
     resumo: 'Impressora não imprime em preto e branco',
     status: 'Em andamento'},
     {img: "https://scontent.ffor2-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160/p160x160/15823641_208018049659163_2387002030826468707_n.jpg?oh=57c9f0cd2253a4fe73363cdf4219e53c&oe=5913688D",
     assunto:'Impressora',
     resumo: 'Impressora não imprime em preto e branco',
     status: 'Em andamento'},
     {img: "https://scontent.ffor2-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160/p160x160/15823641_208018049659163_2387002030826468707_n.jpg?oh=57c9f0cd2253a4fe73363cdf4219e53c&oe=5913688D",
     assunto:'Impressora',
     resumo: 'Impressora não imprime em preto e branco',
     status: 'Em andamento'}
  ];
})
.controller('ChamadCtrl', function($scope) {
 
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
