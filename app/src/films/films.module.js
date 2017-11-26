/**
 * @ngdoc overview
 * @name app.films
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.films', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){

    //add your state mappings here
    $stateProvider
     .state('Films', {
       url:'/films',
       templateUrl:'src/films/films.html',
       controller: 'Films as vm'
     }
    );
  }

}());
