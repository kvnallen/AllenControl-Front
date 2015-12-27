(function() {
  'use strict';

  angular.module('allenControl').config(configuration);

  function configuration($routeProvider) {

    // Categorias

    $routeProvider.when("/categorias", {
      templateUrl: "views/categorias.html",
      controller: "categoriasController"
    })

    // Produtos
    .when("/produtos", {
      templateUrl: "views/products.html",
      controller: "productController"
    })

    .when("/produtos/novo", {
      templateUrl: "views/new-product.html",
      controller: "newProductController",
      resolve : {
        categories : function (categoryAPI) {
          return categoryAPI.get();
        }
      }
    });

    // Unidades de Medida

  }


})();
