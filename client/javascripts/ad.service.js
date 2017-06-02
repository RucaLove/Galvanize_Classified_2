(function() {

    angular.module('classifieds')

    .service('AdService', service)
    service.$inject = ['$http']

    function service($http) {

      this.getAd = function() {
        return $http.get('/api/classifieds')
          .then(function(payload) {
          return payload.data;
        })
      }


        this.newAd = function(newAd) {
            return $http.post('/api/classifieds', newAd)
            // .then(function(payload){
            // console.log(payload.data);
            // return payload.data;
            // })
        }

        this.deleteAd = function(deleteAd) {
          return $http.delete('/api/classifieds', deleteAd)
        }

    }
})()
