'use strict';

$( document ).ready(function() {
  var thermo = new Thermostat();

  $ ("#current-temp").text(thermo.getCurrentTemperature());


  $ ("#change-temp-up").click(function() {
    thermo.increaseTemperature();
    $ ("#current-temp").text(thermo.getCurrentTemperature());
    $ ("#current-energy-usage").text(thermo.currentEnergyUsage());

    if ((thermo.temperature == thermo.MAX_TEMPERATURE) && (thermo.POWER_SAVER = true)){
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




  $ ("#change-temp-down").click(function() {
    thermo.decreaseTemperature();
    $ ("#current-temp").text(thermo.getCurrentTemperature());
    $ ("#current-energy-usage").text(thermo.currentEnergyUsage());
    thermo.warningCheck();
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
    thermo.powerSavingModeOn();
    thermo.temperature = thermo.MAX_TEMPERATURE
    $ ("#current-temp").text(thermo.getCurrentTemperature());
    $ ("#current-psm").text("ON");
  });

  $ ("#change-psm-off").click(function(){
    thermo.powerSavingModeOff();
    $ ("#current-psm").text("OFF");
  });

  $ ("#current-energy-usage").text(thermo.currentEnergyUsage());

});
