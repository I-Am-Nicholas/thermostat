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

Thermostat.prototype.increaseTemperature = function(number){
  if ((this.temperature + number) > this.MAX_TEMPERATURE){
    throw("Temperature cannot rise above the maximum.")
  } else {
     this.temperature += number;
   }
};

Thermostat.prototype.decreaseTemperature = function(number){
  this.temperature -= number;
  if (this.temperature < this.MIN_TEMPERATURE){
    throw("The temperature cannot fall below 10 degrees");
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

}
