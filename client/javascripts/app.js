(function() {

  angular.module("classifieds", [])
  .component('ads', {
    controller: controller,
    templateUrl: './views/ads.html'
  })

  function controller(AdService){
  const vm = this;
  vm.createAd = createAd
  vm.deleteAd = deleteAd

  vm.$onInit = function(){
    AdService.getAd().then(function(data){
      // console.log(data);
      vm.ads = data
    })
  }

  // vm.toggleAdForm = toggleAdForm
  // function toggleAdForm() {
  //   vm.newAd = !vm.newAd
  // }

  function createAd() {
    AdService.newAd(vm.ad)
    delete vm.ad
  }

    function deleteAd() {
      console.log(vm.ad);
      AdService.deleteAd(vm.ad)
      delete vm.ad
    }

  }

})()
