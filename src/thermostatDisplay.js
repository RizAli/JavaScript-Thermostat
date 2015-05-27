$(document).ready(function() {
  var thermostat = new Thermostat();
  $('span#Current_temp').text(thermostat.temp());

  $('#incTemp').click(function() {
    thermostat.increaseTemp();
    $('span#Current_temp').text(thermostat.temp());
  });

  $('#decTemp').click(function() {
    thermostat.decreaseTemp();
    $('span#Current_temp').text(thermostat.temp());
  });


});