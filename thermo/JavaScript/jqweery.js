'use strict';

$( document ).ready(function() {
  var thermo = new Thermostat();

  $ ("#current-temp").text(thermo.getCurrentTemperature());
  thermo.resetThermostat();

  $ ("#change-temp-up").click(function() {
    thermo.increaseTemperature();
    $ ('#mercury').css('height', '+=' + thermo.INCREMENT);
    $ ("#current-temp").text(thermo.getCurrentTemperature());
    $ ("#current-energy-usage").text(thermo.currentEnergyUsage());

    if ((thermo.temperature == thermo.PSM_ON_MAX) && (thermo.POWER_SAVER = true)){
      $( this )
        .mousedown(function() {
          $( "#psm" ).css('color', 'red');
        })
        .mouseup(function() {
          $( "#psm" ).css('color', 'black');
        });
      }

    else if (thermo.temperature < thermo.MAX_TEMPERATURE) {
      $( this )
      .mousedown(function() {
          $( "#psm" ).css('color', 'black');
      })
    }
  });

  $ ('#change-temp-down').click(function() {
    thermo.decreaseTemperature();
    $('#mercury').css('height', '-=' + thermo.INCREMENT);
    $ ("#current-temp").text(thermo.getCurrentTemperature());
    $ ("#current-energy-usage").text(thermo.currentEnergyUsage());
  });

  $ ("#change-temp-reset").click(function() {
    thermo.resetTemperature();
    $ ("#current-temp").text(thermo.getCurrentTemperature());
    $ ("#current-energy-usage").text(thermo.currentEnergyUsage());
  });

  $ ("#current-psm").text(function() {
      return thermo.isPowerSavingModeOn() == true ? "ON" : "OFF"
    });

  $ ("#change-psm-on").click(function(){
    thermo.temperature = thermo.PSM_ON_MAX
    thermo.powerSavingModeOn();
    $ ("#current-temp").text(thermo.getCurrentTemperature());
    $ ("#current-psm").text("ON");
  });

  $ ("#change-psm-off").click(function(){
    thermo.powerSavingModeOff();
    $ ("#current-psm").text("OFF");
  });

  $ ("#current-energy-usage").text(thermo.currentEnergyUsage());

});
