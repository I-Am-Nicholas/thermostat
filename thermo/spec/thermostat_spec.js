describe("Thermostat", function() {
  var thermostat;
  var temperature;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("Has temperature of 20 degrees", function(){
    expect(thermostat.defaultTemp()).toEqual(20);
  });

  it("raises the temperature by 5 degrees", function(){
    thermostat.increase(5)
    expect(thermostat.temperature()).toEqual(25);
  });


});
