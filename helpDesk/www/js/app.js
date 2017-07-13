// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent' : {
        templateUrl : 'templates/login.html',
        controller : 'PlaylistCtrl'
      }
    }
  })

  .state('app.senha', {
    url: '/esqueci-senha',
    views: {
      'menuContent' : {
        templateUrl : 'templates/esqueci-senha.html',
        controller : 'PlaylistCtrl'
      }
    }
  })

   .state('app.meus-chamados', {
    url: '/meus-chamados',
    views: {
      'menuContent' : {
        templateUrl : 'templates/meus-chamados.html',
        controller : 'PlaylistCtrl'
      }
    }
  })

   .state('app.criar-chamados', {
    url: '/criar-chamados',
    views: {
      'menuContent' : {
        templateUrl : 'templates/criar-chamados.html',
        controller : 'PlaylistCtrl'
      }
    }
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })

  .state('app.playlists', {
    url: '/playlists',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlists.html',
        controller: 'PlaylistsCtrl'
      }
    }
  })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.contato', {
    url: '/cadastro',
    views: {
      'menuContent' : {
        templateUrl : 'templates/cadastro.html',
        controller : 'PlaylistCtrl'
      }
    }
  })

  .state('app.configuracao', {
    url: '/configuracao',
    views: {
      'menuContent' : {
        templateUrl : 'templates/configuracao.html',
        controller : 'PlaylistCtrl'
      }
    }
  })

  .state('app.categoria', {
    url: '/categoria',
    views: {
      'menuContent' : {
        templateUrl : 'templates/categoria.html',
        controller : 'PlaylistCtrl'
      }
    }
  })

 .state('app.feedback', {
    url: '/feedback',
    views: {
      'menuContent' : {
        templateUrl : 'templates/feedback.html',
        controller : 'PlaylistCtrl'
      }
    }
  })

  .state('app.chamados', {
    url: '/chamados',
    views: {
      'menuContent' : {
        templateUrl : 'templates/chamados.html',
        controller : 'ChamadoCtrl'
      }
    }
  });
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
