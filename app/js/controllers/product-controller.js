(function() {
  'use strict';

  angular
    .module('allenControl')
    .controller('productController', productController);

  function productController($scope, productAPI) {

    /*jshint validthis: true */
    $scope.register = register;

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

  }

})();
