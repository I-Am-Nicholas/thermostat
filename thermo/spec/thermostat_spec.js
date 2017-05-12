'use strict';

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("Has a default temperature of 20 degrees", function(){
    expect(thermostat.getCurrentTemperature()).toEqual(thermostat.DEFAULT_TEMPERATURE);
  });

  it("raises the temperature by 1 degree", function(){
    thermostat.increaseTemperature()
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it("decreases the temperature by 1 degree", function(){
    thermostat.decreaseTemperature()
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it("changes the temperature to default value", function() {
    thermostat.increaseTemperature();
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(thermostat.DEFAULT_TEMPERATURE);
  });

  describe("throws an error", function(){

    it("if temperature falls below 10 degrees", function() {
      for(var i = 0; i < 10; i ++) {
        thermostat.decreaseTemperature()
      }
      expect(function(){thermostat.decreaseTemperature();}).toThrow("The temperature cannot fall below 10 degrees");
    });

    it("if temperature rises above 25 degrees when power saving is on", function(){
      for(var i = 0; i < 5; i ++) {
        thermostat.increaseTemperature();
      }
      expect(function(){thermostat.increaseTemperature();}).toThrow("Temperature cannot rise above the maximum.");
    });

    it("if temperature rises above 32 degrees when power saving mode is off", function() {
      thermostat.powerSavingModeOff();
      for(var i = 0; i < 12; i ++) {
        thermostat.increaseTemperature();
      }
      expect(function() {thermostat.increaseTemperature();}).toThrow("Temperature cannot rise above the maximum.");
    })

  });

  describe("Displays current energy usage", function() {

    it("as low-usage when below 18 degrees", function() {
      for(var i = 0; i < 3; i ++) {
        thermostat.decreaseTemperature();
      }
      expect(thermostat.currentEnergyUsage()).toEqual("low-usage")
    });

    it("as medium-usage when between 18 degrees and 24 degrees", function() {
      expect(thermostat.currentEnergyUsage()).toEqual("medium-usage")
    });

    it("as high-usage when above 25 degrees", function() {
      for(var i = 0; i < 5; i ++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.currentEnergyUsage()).toEqual("high-usage")
    });

  });

  describe("power saving mode", function() {

    it('displays as on', function() {
      thermostat.powerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toEqual(true);
    });

    it('displays as off', function() {
      thermostat.powerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toEqual(false);
    });

  });

  // describe("temperature gauge", function(){
  //   thermostat.mercury() = 25;
  //   expect(thermostat.()).toEqual(false);
  // });


});
