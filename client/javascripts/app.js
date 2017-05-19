(function() {
  angular.module('classifieds', ['ui.router', 'angularMoment'])
  angular.module("classifieds", [])
  .component('ads', {
    controller: controller,
    templateUrl: '../views/ads.html'
  })
  .component('adList', {
    templateUrl: '../views/ad-list.html',
    controller: adlistController
  })
  // .component('addingAd', {
  //   templateUrl: '../views/ad-list.html',
  //   controller: addAdController
  // })

  function controller(AdService){
  const vm = this;

  vm.$onInit = function(){
    AdService.getAd().then(function(data){
      // console.log(data);
      vm.ads = data
    })
  }

  // vm.addAd = function() {
  //   vm.ads.push(vm.ad)
  //   delete vm.ad
  // }
}

  function adlistController(NewService) {
    const vm = this

    vm.toggleAdForm = toggleAdForm
    vm.createAd = createAd

    function toggleAdForm() {
      vm.newAd = !vm.newAd
    }

    function createAd() {
      NewService.newAd(vm.ad)
      delete vm.ad
    }
  }

  // function addAdController($http) {
  //   const vm = this
  //
  //   vm.$onInit = onInit
  //
  //   function onInit() {
  //     vm.addingAd = false
  //   }
  // }

})()

// (function() {
//
//   angular
//     .module('classifieds', ['ngRoute'])
//     .config(config);
//
//   function config($routeProvider, $locationProvider) {
//     $routeProvider
//       .when('/classifieds', {
//         templateUrl: '../views/index.html',
//         controller: 'ClassifiedsController',
//         controllerAs: 'vm',
//         resolve: {
//           classifieds: getAllClassifieds
//         }
//       })
//       // .when('/pirates/new', {
//       //   templateUrl: '../views/pirates/new.html',
//       //   controller: 'NewPirateController',
//       //   controllerAs: 'vm'
//       // })
//       // .when('/pirates/:id/edit', {
//       //   templateUrl: '../views/pirates/edit.html',
//       //   controller: 'EditPirateController',
//       //   controllerAs: 'vm',
//       //   resolve: {
//       //     pirate: getPirateById
//       //   }
//       // })
//       .otherwise({ redirectTo: '/index' })
//     $locationProvider.html5Mode(true);
//   }
//
//   function getAllClassifieds(AdService) {
//     return AdService.getAd();
//   }
//
//   function getAdById(AdService, $route) {
//     return AdService.getAd($route.current.params.id);
//   }
//
//   config.$inject = ['$routeProvider', '$locationProvider'];
//   getAllClassifieds.$inject = ['AdService'];
//   getAdById.$inject = ['AdService', '$route'];
// })()
