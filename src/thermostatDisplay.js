$(document).ready(function() {
  var thermostat = new Thermostat();
  $('span#Current_temp').text(thermostat.temp());

