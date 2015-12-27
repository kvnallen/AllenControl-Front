(function() {
  'use strict';

  angular
    .module('allenControl')
    .service('categoryAPI', Service);


  function Service($http, config) {

    this.exposedFn = exposedFn;

    this.register = register;

		this.get = get;

    ////////////////

		function get() {
			return $http.get(config.baseUrl + "/category")
		}

    function register(title) {
      return $http.post(config.baseUrl + "/category", {
        title: title
      });
    }

    function exposedFn() {}
  }

})();
