/**
 * @ngdoc object
 * @name app.common.constant:Urls
 * @description < description placeholder >
 * @example
   <pre>
   angular.module("someModule", [])
   .config(configuration);

   function configuration(Urls, someProvider){
    //use the injected constant
    };
   </pre>
 */

(function(){

  'use strict';

  var Urls = {
    baseUrl: 'http://localhost:8000/'

  };

	angular
		.module('app.common')
		.constant('Urls', Urls);

}());
