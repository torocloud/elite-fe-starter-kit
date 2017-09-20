(function () {
  'use strict'

  angular.module('App')
    .config(config)

  function config ($stateProvider) {
    /*
      IMPORTANT:
        list of endpoints can be found here https://fe-elite.toro.io/explorer

        apiBaseUrl = `https://fe-elite.toro.io/api/elite`
        access_token parameter should be present on all requests (except login)
        get an access_token via POST to `${apiBaseUrl}/Users/login` with request body {"username": teamId, "password": uniqueCode}
          the response should have a property `id`, that's the access_token you will use
          example request with access_token: `${apiBaseUrl}/categories?access_token=id`

        html5 mode should be left disabled by default
        The checker will change window.location.href to navigate through your app. Make sure it will work (try it on chrome console)
        AVOID HARD RELOADS. use $state.go or ui-sref like how it should be. Your app should be a Single Page App
        Upon every use of the checker, it will destroy all your previous access tokens to prevent hardcoded access tokens

        required elements format: element_type        element_class_or_id         - description
                                  '*' means anything  '*' means anything or none
                                                      '#' = id '.' = class
    */

    $stateProvider
      .state('login', {
        url: '/login'
      })
      /*
        on load: none
        required elements:
          input   #login__username     - username
          input   #login__password     - password
          button  #login__loginButton  - clicking this should make a POST to `${apiBaseUrl}/Users/login` with request body {"username": username, "password": password}
      */


      .state('dashboardAddCategory', {
        url: '/dashboard/categories/add'
      })
      /*
        on load: none
        required elements:
          input   #categories-new__name         - category name
          input   #categories-new__assetUrl     - url to an image
          input   #categories-new__description  - self explanatory
          button  #categories-new__addButton    - clicking this should make a POST to `${apiBaseUrl}/categories` with the data from the elements specified
      */


      .state('dashboardAddProduct', {
        url: '/dashboard/products/add'
      })
      /*
        on load: none
        required elements:
          input   #products-new__name       - self explanatory
          input   #products-new__price      - number
          input   #products-new__assetUrl   - url to an image
          select  #products-new__category   - dropdown of available categories from GET `${apiBaseUrl}/categories` (option values should be the name of the category)
                                            - the checker will immediately try to set the category,
                                              that means categories should be available also immediately
                                              hint: use resolve and $q or cache it on localStorage
          button  #products-new__addButton  - clicking this should make a POST to `${apiBaseUrl}/products` with the data from the elements specified
                                              and should redirect to `dashboardEditProduct` on success
      */


      .state('dashboardEditProduct', {
        url: '/dashboard/products/:id/edit'
      })
      /*
        on load: GET /products/:id then populate the required elements below
        required elements:
          input   #products-new__name          - self explanatory
          input   #products-new__price         - number
          input   #products-new__assetUrl      - url to an image
          select  #products-new__category      - dropdown of available categories
          button  #products-new__updateButton  - clicking this should make a PUT to `${apiBaseUrl}/products` with the data from the elements specified
          button  #products-new__deleteButton  - clicking this should make a DELETE to `${apiBaseUrl}/products/:productId`
      */


      .state('dashboardAddProductSku', {
        url: '/dashboard/products/:id/sku/add'
      })
      /*
        on load: none
        required elements:
          input   #sku-new__name        - self explanatory
          input   #sku-new__description - self explanatory
          input   #sku-new__assetUrl    - url to an image
          select  #sku-new__quantity    - integer
          button  #sku-new__addButton   - clicking this should make a POST to `${apiBaseUrl}/products/:productId/skus` with the data from the elements specified
      */


      .state('elite', {
        url: '/'
      })
      /*
        on load: GET `${apiBaseUrl}/products`
        required elements:
          *  .products-container__item  - iterate through products. Each iterations should only have the ff elements in this order:
                                        - img  * - src should match product.assetUrl
                                        - *    * - innerHTML should match product.name
                                        - *    * - innerHTML should match '$' + product.price
        note: add atleast 5 products to show on the product page for more points
      */


      .state('product', {
        url: '/product/:id'
      })
      /*
        on load: GET `${apiBaseUrl}/products/:productId` then populate the required elements below
        required elements:
          img     #product-image        - src should match with product.assetUrl. If there is a product.skus, select the first item's instead
          *       #product-price        - innerHTML should match with product.price
          *       #product-description  - the first item on product.skus' description
          img     .product-skus         - iterate through product.skus. Clicking on these images will update the #product-description and #product-image
          button  #product-addToCart    - clicking this should make a POST to `${apiBaseUrl}/cart` with {product_id: product_id, sku_id: selected_sku_id if there is}
                                        - redirect to `cart` on success
      */


      .state('cart', {
        url: '/cart'
      })
      /*
        on load: GET `${apiBaseUrl}/cart` then populate the required elements below
        required elements:
          button  .cart__removeButton - every cart item should have a working delete function when clicked. DELETE `${apiBaseUrl}/cart/:itemId`
      */


      .state('dashboardEditCategory', {
        url: '/dashboard/categories/:id/edit'
      })
      /*
        on load: GET `${apiBaseUrl}/categories/:categoryId`
        required elements:
          button  #categories-edit__deleteButton  - clicking this should make a DELETE to `${apiBaseUrl}/categories/:categoryId`
      */


      .state('dashboardViewAccount', {
        url: '/dashboard/account'
      })
      /*
        on load: GET `Users/:userId`
      */
  }
}());
