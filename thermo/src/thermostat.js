'use strict';

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MIN_TEMPERATURE = 10;
  this.MAX_TEMPERATURE = 25;
  this.POWER_SAVER = true;
};

Thermostat.prototype.getCurrentTemperature = function(){
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
    throw("The temperature cannot fall below 10 degrees");
  } else {
    this.temperature -= 1;
  }
};

Thermostat.prototype.powerSavingModeOn = function() {
  this.POWER_SAVER = true;
  this.MAX_TEMPERATURE = 25;
}

Thermostat.prototype.powerSavingModeOff = function() {
  this.POWER_SAVER = false;
  this.MAX_TEMPERATURE = 32;
}

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.currentEnergyUsage = function() {
  var current = this.temperature;
  switch(true) {
    case (current < 18):
      return('low-usage');
      break;
    case (current > 18 && current < 25):
      return('medium-usage');
      break;
    default:
      return('high-usage');
      break;
  }
}
