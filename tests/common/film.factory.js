(function(){

  /* global module, inject */

  'use strict';

  describe('Factory: film', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.common'));

    var film;

    beforeEach(inject(function($injector){

      film = $injector.get('film');

    }));

    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());
