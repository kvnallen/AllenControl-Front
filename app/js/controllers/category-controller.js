(function() {
  'use strict';

  angular
    .module('allenControl')
    .controller('categoriasController', categoriasController);

  function categoriasController($scope, categoriaAPI) {

    /*jshint validthis: true */
    $scope.register = register;

    loadCategories();

    ////////////////////////////


    function loadCategories() {
      categoriaAPI
        .get()
        .success(success)
        .catch(fail);

      function success(categorias) {
        $scope.categories = categorias;
      }

      function fail(argument) {
        // body...
      }
    }

    function register(title) {

      categoriaAPI
        .register(title)
        .success(success)
        .catch(fail);


      function success(result) {
        $scope.title = '';
        loadCategories();
      }

      function fail(result) {

      }

    }

  }

})();
