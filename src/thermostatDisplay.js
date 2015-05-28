$(document).ready(function() {
  var thermostat = new Thermostat();
  $('span#Current_temp').text(thermostat.temp());
  $('span#Power_Saving_Mode').text(thermostat.PSModeOn());
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
    var i = thermostat.PSModeOn();
    console.log(i);
  });

  $('#Power_Saving_Mode_Off').click(function(){
    var j = thermostat.PSModeOff();
    console.log(j);
  });


});