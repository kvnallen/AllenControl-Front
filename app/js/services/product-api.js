(function() {
  'use strict';

  angular
    .module('allenControl')
    .service('productAPI', Service);


  function Service($http, config) {
    this.register = register;

		this.get = get;

    ////////////////

		function get() {
			return $http.get(config.baseUrl + "/product")
		}

    function register(product) {
      return $http.post(config.baseUrl + "/product", product);
    }

  }

})();
