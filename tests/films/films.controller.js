(function(){

  /* global module, inject */

  'use strict';

  describe('Controller: Films', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.films'));

    var ctrl;
    var scope;

    beforeEach(inject(function($controller, $injector){

      scope = $injector.get('$rootScope');

      ctrl = $controller('Films', {
        //add injectable services
      });

    }));

    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());
