// 'use strict';

// function Thermostat() {
var Thermostat = function(){
  this.DEFAULT_TEMP = 20;
  this.temperature = this.DEFAULT_TEMP;
  this.MIN_TEMP = 10;
  this.MAX_TEMP = 32;
  this.PSM_ON_MAX = 25;
  this.PSM_OFF_MAX = 32;
  this.POWER_SAVER = false;
  this.LOWEST = 18;
  this.HIGHEST = 25;
  this.INCREMENT = 10//TO FIX
};

Thermostat.prototype.getCurrentTemperature = function(){
 return this.temperature;
};

Thermostat.prototype.displayedTemperature = function(){
  var temp = document.getElementById('current-temp');
  console.log(temp);
};

Thermostat.prototype.increaseTemperature = function(){
  if ((this.temperature + 1) > this.MAX_TEMP){
    throw("Temperature cannot rise above the maximum.")
  } else {
    this.temperature += 1;
  }
};

Thermostat.prototype.decreaseTemperature = function(){
  if ((this.temperature - 1) < this.MIN_TEMP){
    throw("The temperature cannot fall below the minimum.")
  } else {
    this.temperature -= 1;
  }
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMP;
  this.resetGauge();
}

Thermostat.prototype.resetGauge = function() {
  var gauge = document.getElementById("temperature-gauge").clientHeight;
  var reset = ((this.temperature / this.PSM_OFF_MAX) * 100)
  var merc = document.getElementById('mercury').style.height = reset + '%'
};

Thermostat.prototype.powerSavingModeOn = function() {
  this.POWER_SAVER = true;
  this.MAX_TEMP = this.PSM_ON_MAX;
  this.temperature = this.PSM_ON_MAX;
  this.resetGauge();
}

Thermostat.prototype.powerSavingModeOff = function() {
  this.POWER_SAVER = false;
  this.MAX_TEMP = this.PSM_OFF_MAX;
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
