'use strict';


describe("Thermostat", function() {
  var thermostat;
  var temperature;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("Has temperature of 20 degrees", function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  xit("raises the temperature by 5 degrees", function(){
    thermostat.increaseTemp(5)
    expect(thermostat.temperature()).toEqual(25);
  });


});
