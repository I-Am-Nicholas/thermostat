
$( document ).ready(function() {
  thermo = new Thermostat();

  $ ("#current-temp").text(thermo.getCurrentTemperature());

  $ ("#current-psm").text(function() {
      return thermo.isPowerSavingModeOn() === true ? "ON" : "OFF"
    });

  $ ("#current-energy-usage").text(thermo.currentEnergyUsage());

});
