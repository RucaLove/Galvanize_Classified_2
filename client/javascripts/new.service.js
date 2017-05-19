(function() {

  angular.module('classifieds')
  .service('NewService',
  function($http) {
    return {
      newAd: function(newAd){
        return $http.post('/classifieds', newAd).then(function(payload){
          console.log(payload.data);
          return payload.data;
        })
      }
    }
  })
})()
