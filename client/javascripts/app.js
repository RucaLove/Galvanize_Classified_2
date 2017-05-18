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
}

})()
