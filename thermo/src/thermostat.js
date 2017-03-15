
var Thermostat = function(){};

const DEFAULT_TEMP = 20

Thermostat.prototype.defaultTemp = function(){
  return DEFAULT_TEMP
};

Thermostat.prototype.temperature = function(number){
  return (DEFAULT_TEMP + number)
};
