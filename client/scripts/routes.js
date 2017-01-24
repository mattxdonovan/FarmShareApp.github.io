import { Config } from 'angular-ecmascript/module-helpers';

export default class RoutesConfig extends Config {
  configure() {
    this.$stateProvider
      .state('tab', {
        url: '/farm',
        templateUrl: 'client/templates/tabs.html'
      })
      .state('tab.landing', {
        url: '/landing',
        views: {
          'tab-landing': {
            templateUrl: 'client/templates/landing.html',
          }
        }
      })
      .state('tab.faq', {
        url: '/FAQ',
        views: {
          'tab-landing': {
            templateUrl: 'client/templates/faq.html',
            controller: 'faq'
          }
        }
      })
      .state('tab.farminfo', {
        url: '/farminfo/:id',
        views: {
          'tab-landing': {
            templateUrl: 'client/templates/farmInfo.html',
            controller: 'ProductCtrl as product',
            css: 'client/assets/stylesheets/farmInfo.css'
          }
        }
      })
      .state('tab.users', {
        url: '/profile',
        views: {
          'tab-landing': {
            templateUrl: 'client/templates/users.html',
            controller: 'ProductspgCtrl as products'
          }
        }
      })
      .state('tab.login', {
        url: '/login',
        views: {
          'tab-landing': {
            templateUrl: 'client/templates/login.html',
            // controller: 'LoginCtrl as logger'
          }
        }
      })
      .state('tab.farmer', {
        url: '/farmer',
        views: {
          'tab-landing': {
            templateUrl: 'client/templates/farmer.html'
          }
        }
      })
      .state('tab.memberform', {
        url: '/memberform',
        views: {
          'tab-landing': {
            templateUrl: 'client/templates/memberform.html',
            controller: 'FarmerInputCtrl as farmer',
          }
        }
      })
      .state('tab.editfarm', {
        url: '/memberform',
        views: {
          'tab-landing': {
            templateUrl: 'client/templates/memberform.html',
            controller: 'signup as signup',
            resolve: {
              currentUser($q) {
                if (Meteor.userId() === null) {
                  return $q.reject(this.$urlRouterProvider.otherwise('farm/landing'));
                } else {
                  return $q.resolve();
                }
              }
            }
          }
        }
      })
      .state('tab.results', {
        url: '/results',
        views: {
          'tab-landing': {
            templateUrl: 'client/templates/results.html',
            controller: 'ResultsCtrl as results'
          }
        }
      })
      .state('tab.productinput', {
        url: '/productinput',
        views: {
          'tab-landing': {
            templateUrl: 'client/templates/productinput.html',
            controller:'ProductInputCtrl as product',
            resolve: {
              currentUser($q) {
                if (Meteor.userId() === null) {
                  return $q.reject(this.$urlRouterProvider.otherwise('farm/landing'));
                } else {
                  return $q.resolve();
                }
              }
            }
          }
        }
      });


    this.$urlRouterProvider.otherwise('farm/landing')
  }
}

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']
