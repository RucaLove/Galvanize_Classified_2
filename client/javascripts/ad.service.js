(function() {

  angular.module('classifieds')
  .service('AdService',
  function($http) {
    return {
      getAd: function(){
        return $http.get('/').then(function(payload){
          // console.log(payload.data);
          return payload.data;
        })
      }
    }
  })
})()