(function() {
  angular.module("classifieds", [])
  .component('ads', {
    controller: controller,
    templateUrl: '../views/ads.html'
  })
  .component('adList', {
    templateUrl: '../views/ad-list.html',
    controller: adlistController
  })

  function controller(AdService){
  const vm = this;

  vm.$onInit = function(){
    AdService.getAd().then(function(data){
      // console.log(data);
      vm.ads = data
    })
  }
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

})()
