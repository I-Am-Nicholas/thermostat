'use strict';

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("Has temperature of 20 degrees", function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("raises the temperature by 1 degree", function(){
     console.log(thermostat.temperature);
    thermostat.increaseTemperature(1)
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it("decreases the temperature by 1 degree", function(){
    thermostat.decreaseTemperature(1)
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it("changes the temperature to default value", function() {
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(thermostat.DEFAULT_TEMPERATURE);
  });

  describe("throws an error", function(){

    it("if temperature falls below 10 degrees", function() {
      expect(function(){thermostat.decreaseTemperature(11);}).toThrow("The temperature cannot fall below 10 degrees");
    });

    it("if temperature rises above 25 degrees when power saving is on", function(){
      expect(function(){thermostat.increaseTemperature(8);}).toThrow("Temperature cannot rise above the maximum.");
    });

    it("if temperature rises above 32 degrees when power saving mode is off", function() {
      thermostat.powerSavingModeOff();
      expect(function() {thermostat.increaseTemperature(13);}).toThrow("Temperature cannot rise above the maximum.");
    })

  });

});
