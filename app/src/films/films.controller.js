/**
 * @ngdoc controller
 * @name app.films.controller:Films
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.films')
		.controller('Films', Films);

  /* @ngInject */
	function Films(film){
		var vm = this;
		vm.films=[];
		vm.filmIndex=0;


		vm.getAllFilms=getAllFilms;
    vm.Next=Next;
    vm.Previous=Previous;

		vm.testFunction = testFunction;

    getAllFilms();

    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.films.controller:Films
     * @description
     * My Description rules
     */
    function Next(){
      console.log('next called')
    vm.filmIndex++;
    vm.film=vm.films[vm.filmIndex];
    }
    function Previous(){
      vm.filmIndex--;
      vm.film=vm.films[vm.filmIndex];
    }

    function getAllFilms(){
      film.getAllFilms().then(function (response) {

        if(response.data.success && response.data.result){
          console.log(response.data.films)
          vm.films=response.data.films;
          vm.film=vm.films[vm.filmIndex];

        }else{
          vm.NoFilmMessage='There are no fims in Database'
        }
      },
        function (error) {
          vm.NoFilmMessage='Something went wrong'
          console.log(error);
        })
    }
    function testFunction(num){
			console.info('This is a test function');
		}
	}

}());
