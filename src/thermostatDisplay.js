$(document).ready(function() {
  var thermostat = new Thermostat();
  $('span#Current_temp').text(thermostat.temp());

  $('#increaseTemp').click(function() {
    thermostat.increaseTemp();
    $('span#Current_temp').text(thermostat.temp());
  });


});