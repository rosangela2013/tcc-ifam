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
    templateUrl: 'templates/inicio.html'
  })

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent' : {
        templateUrl : 'templates/login.html',
        controller : 'AppCtrl'
      }
    }
  })

  .state('app.cadastrar-conta', {
    url: '/cadastrar-conta',
    views: {
      'menuContent' : {
        templateUrl : 'templates/cadastro.html',
        controller : 'AppCtrl'
      }
    }
  })

  .state('app.esqueci-senha', {
    url: '/esqueci-senha',
    views: {
      'menuContent' : {
        templateUrl : 'templates/esqueci-senha.html',
        controller : 'AppCtrl'
      }
    }
  })


  .state('menu', {
    url: '/menu',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })

  .state('menu.chamados', {
    url: '/chamados',
    views: {
      'menuContent' : {
        templateUrl : 'templates/chamados.html',
        controller : 'ChamadoCtrl'
      }
    }
  })

  .state('menu.configuracao', {
    url: '/configuracao',
    views: {
      'menuContent' : {
        templateUrl : 'templates/configuracao.html',
        controller : 'AppCtrl'
      }
    }
  })

  .state('menu.categoria', {
    url: '/categoria',
    views: {
      'menuContent' : {
        templateUrl : 'templates/categoria.html',
        controller : 'AppCtrl'
      }
    }
  })

  .state('menu.criar-chamados', {
    url: '/criar-chamados',
    views: {
      'menuContent' : {
        templateUrl : 'templates/criar-chamados.html',
        controller : 'AppCtrl'
      }
    }
  })

  .state('menu.meus-chamados', {
    url: '/meus-chamados',
    views: {
      'menuContent' : {
        templateUrl : 'templates/meus-chamados.html',
        controller : 'AppCtrl'
      }
    }
  })

  .state('menu.feedback', {
    url: '/feedback',
    views: {
      'menuContent' : {
        templateUrl : 'templates/feedback.html',
        controller : 'AppCtrl'
      }
    }
  })

  .state('menu.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('menu.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
