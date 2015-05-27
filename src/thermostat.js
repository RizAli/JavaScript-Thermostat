var Thermostat = function(){
  this.temperature = 20;
};

Thermostat.prototype.temp = function() {
  return this.temperature;
};

Thermostat.prototype.increaseTemp = function() {
  return this.temperature +=1;
};

Thermostat.prototype.decTemp = function() {
  // can decrease up to 10 degrees
  // if the PSModeOn maxtemp can be 25 degrees
  // if the PSMModeOff maxtemp can be 32 degree
};


function PSModeOn(){
  // PSM mode is ON by default
  // On and OFF
}


function PSModeOff() {

}

function reset(){
  // resets the temp to 20
}

function print(){
  temp;
  document.getElementById('temp').innerHTML = temp;
}

