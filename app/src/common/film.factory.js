/**
 * @ngdoc service
 * @name app.common.film
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.common')
		.factory('film', film);

  /* @ngInject */
  function film($http,Urls){
		return {
			testFunction: testFunction,
      getAllFilms:getAllFilms
		};

		////////////////////

    /**
     * @ngdoc
     * @name app.common.film#testFunction
     * @methodOf app.common.film
     *
     * @description < description placeholder >
     * @example
     * <pre>
     * film.testFunction(id);
     * </pre>
     * @param {int} entity id
     */

		function testFunction(id){
			console.info('This is a test function');
		}
    function getAllFilms(){

		  return $http.get(Urls.baseUrl+'api/films')

    }
	}

}());
