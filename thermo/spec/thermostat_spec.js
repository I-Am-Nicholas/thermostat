describe("Thermostat", function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("Has temperature of 20 degrees", function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("raises the temperature by 1 degree", function(){
    thermostat.increaseTemperature(1)
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it("decreases the temperature by 1 degree", function(){
    thermostat.decreaseTemperature(1)
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  describe("It throws an error", function(){

    it("if temperature falls below 10 degrees", function() {
      // for (var i = 15; i > 1; i--) {}
      thermostat.temperature = 12
      expect(function(){thermostat.decreaseTemperature(3);}).toThrow("The temperature cannot fall below 10 degrees");
    });

    it("if temperature rises above 25 degrees when power saving is on", function(){
      thermostat.temperature = 25
      expect(function(){thermostat.increaseTemperature(1);}).toThrow("Power Saving Mode is on. Temperature cannot rise above 25 degrees.");
    });

  });

});
