(function() {
  'use strict';

  angular
    .module('allenControl')
    .service('unitOfMeasurementAPI', Service);


  function Service($http, config) {
    var controllername = '/unitmeasurement'

    this.register = register;

		this.get = get;

    ////////////////

		function get() {
			return $http.get(config.baseUrl + controllername)
		}

    function register(name) {
      return $http.post(config.baseUrl + controllername, name);
    }

  }

})();
