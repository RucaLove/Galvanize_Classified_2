(function() {
  angular.module("classifieds", [])
  .component('ads', {
    controller: controller,
    templateUrl: '../views/ads.html'
  })

  function controller(AdService){
  const vm = this;

  vm.$onInit = function(){
    AdService.getAd().then(function(data){
      console.log(data);
      vm.ads = data
    })
  }

  vm.addAd = function() {
    vm.ads.push(vm.ad)
    delete vm.ad
  }

}

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
