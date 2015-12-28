(function() {
  'use strict';

  angular
    .module('allenControl')
    .controller('newProductController', newProductController);

  function newProductController($scope, productAPI, categories, unitsOfMeasurement) {

    /*jshint validthis: true */
    $scope.register = register;
    $scope.categories = categories.data;
    $scope.unitsOfMeasurement = unitsOfMeasurement.data;

    loadProducts();

    ////////////////////////////


    function loadProducts() {
      productAPI
        .get()
        .success(success)
        .catch(fail);

      function success(products) {
        $scope.products = products;
      }

      function fail(argument) {
        // body...
      }
    }

    function register(title) {

      productAPI
        .register(title)
        .success(success)
        .catch(fail);


      function success(result) {
        $scope.title = '';
        loadProducts();
      }

      function fail(result) {

      }

    }

  }

})();
