'use strict';

// function Thermostat() {
var Thermostat = function(){
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MIN_TEMPERATURE = 10;
  this.MAX_TEMPERATURE = 32;
  this.PSM_ON_MAX = 25;
  this.PSM_OFF_MAX = this.MAX_TEMPERATURE;
  this.POWER_SAVER = false;
  this.LOWEST = 18;
  this.HIGHEST = 25;
  this.INCREMENT = 8
};

Thermostat.prototype.incrementsBy = function(){
  var gauge = document.getElementById("temperature-gauge").clientHeight;
  var increment = Math.floor(gauge / (this.MAX_TEMPERATURE - this.MIN_TEMPERATURE));
};

Thermostat.prototype.getCurrentTemperature = function(){
  console.log(this.INCREMENT)
 return this.temperature;
};

Thermostat.prototype.increaseTemperature = function(){
  if ((this.temperature + 1) > this.MAX_TEMPERATURE){
    throw("Temperature cannot rise above the maximum.")
  } else {
    this.temperature += 1;
  }
};

Thermostat.prototype.decreaseTemperature = function(){
  if ((this.temperature - 1) < this.MIN_TEMPERATURE){
    throw("The temperature cannot fall below the minimum.")
  } else {
    this.temperature -= 1;
  }
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.resetThermostat();
}

Thermostat.prototype.resetThermostat = function() {
  var gauge = document.getElementById("temperature-gauge").clientHeight;
  var reset = Math.floor(gauge / (100 / this.temperature))
  var merc = document.getElementById('mercury').style.height = reset + '%'
};

Thermostat.prototype.powerSavingModeOn = function() {
  this.POWER_SAVER = true;
  this.MAX_TEMPERATURE = this.PSM_ON_MAX;
  this.resetThermostat();
}

Thermostat.prototype.powerSavingModeOff = function() {
  this.POWER_SAVER = false;
  this.MAX_TEMPERATURE = this.PSM_OFF_MAX;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.POWER_SAVER;
}

Thermostat.prototype.currentEnergyUsage = function() {
  var current = this.temperature;
  switch(true) {
    case (current < this.LOWEST):
      return('low-usage');
      break;
    case (current >= this.LOWEST && current < this.HIGHEST):
      return('medium-usage');
      break;
    default:
      return('high-usage');
      break;
  }
}
