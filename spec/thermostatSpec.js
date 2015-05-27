describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe( "Defaul Settings", function(){

    it ('the temp starts at 20 degrees', function(){
      expect(thermostat.temp).toEqual(20);
    });

    xit ("the up button increases the temperature", function(){
      expect(thermostat.upButton(21)).toEqual(21);
    });


  });
});
