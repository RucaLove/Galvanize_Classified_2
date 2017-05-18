// (function() {
//   angular
//     .module('classifieds')
//     .service('AdService', AdService)
//
//   function AdService($http) {
//     const BASE_URL = '/api/classifieds'
//
//     this.getAd = function() {
//       return $http.get(BASE_URL);
//     }
//
//     this.createAd = function(newPirate) {
//       return $http.post(BASE_URL, newPirate);
//     }
//
//     this.getAd = function(id) {
//       return $http.get(BASE_URL + "/" + id);
//     }
//
//     this.deleteAd = function(id) {
//       return $http.delete(BASE_URL + "/" + id);
//     }
//
//     this.updateAd = function(updatedAd) {
//       return $http.put(BASE_URL + "/" + updatedAd.id, updatedAd);
//     }
//   }
//
//   AdService.$inject = ["$http"];
// })()
