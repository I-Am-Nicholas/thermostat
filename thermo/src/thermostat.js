
function Thermostat() {
  this.temperature = 20;
};

Thermostat.prototype.getCurrentTemperature = function(){
 return this.temperature;
};

Thermostat.prototype.increaseTemperature = function(number){
  this.temperature += number;
};
