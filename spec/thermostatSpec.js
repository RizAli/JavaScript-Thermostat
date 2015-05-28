
describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe( "Defaul Settings", function(){

    it ('the temp starts at 20 degrees', function(){
      expect(thermostat.temperature).toEqual(20);
    });

    it('increases temperature with increaseTemp method', function() {
      thermostat.increaseTemp();
      expect(thermostat.temperature).toEqual(21);
    });

    it('decreases temperature with decreaseTemp method', function() {
      thermostat.decreaseTemp();
      expect(thermostat.temperature).toEqual(19);
    });

    it('Resets the temperature to 20 degrees with resetTemp method', function(){
      thermostat.resetTemp();
      expect(thermostat.temperature).toEqual(20);
    });

    it('decreases temp upto 10 degress', function(){
      thermostat.temperature = 9;
      thermostat.decreaseTemp();
      expect(thermostat.temperature).toEqual(10);
    });

    it('sets max temp to 25 degrees when PSMode is ON', function(){
      thermostat.temperature = 24;
      thermostat.increaseTemp();
      expect(thermostat.temperature).toEqual(25);
    });

    it('Can have max temp of 32 degrees when PSMode is OFF', function(){
      thermostat.CurrentPSMode = false;
      thermostat.temperature = 32;
      expect(thermostat.temperature).toEqual(32);
    });

  });
});
