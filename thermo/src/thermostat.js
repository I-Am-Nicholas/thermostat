'use strict';

function Thermostat() {
  this.temperature = 20;
};

var powerSaver
powerSaver = true

Thermostat.prototype.getCurrentTemperature = function(){
 return this.temperature;
};

Thermostat.prototype.increaseTemperature = function(number){
  if ((this.temperature += number) > 25 && powerSaver == true){
  //  this.temperature -= number;
    throw("Power Saving Mode is on. Temperature cannot rise above 25 degrees.")
  }
   else {
     this.temperature += number;
   }

};

Thermostat.prototype.decreaseTemperature = function(number){
  this.temperature -= number;
  if (this.temperature < 10){
    throw("The temperature cannot fall below 10 degrees");
  }
};
