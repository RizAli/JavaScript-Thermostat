$(document).ready(function() {
  var thermostat = new Thermostat();
  $('span#Current_temp').text(thermostat.temp());
  $('span#Power_Saving_Mode').text(thermostat.PSMode());
  // $('span#Power_Saving_Mode').text(thermostat.PSModeOn());

  $('#incTemp').click(function() {
    thermostat.increaseTemp();
    $('span#Current_temp').text(thermostat.temp());
  });

  $('#decTemp').click(function() {
    thermostat.decreaseTemp();
    $('span#Current_temp').text(thermostat.temp());
  });

  $('#Power_Saving_Mode_On').click(function(){
    thermostat.PSModeOn();
    $('span#Power_Saving_Mode').text(thermostat.PSModeOn());
  });

  $('#Power_Saving_Mode_Off').click(function(){
    thermostat.PSModeOff();
    $('span#Power_Saving_Mode').text(thermostat.PSModeOff());
  });

  $('#resetTemp').click(function(){
    thermostat.resetTemp();
    $('span#Current_temp').text(thermostat.temp());
  });

});