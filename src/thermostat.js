var Thermostat = function(){
  this.temperature = 20;
  this.PSMode = true;
};

Thermostat.prototype.temp = function() {
  return this.temperature;
};

Thermostat.prototype.increaseTemp = function() {
  return this.temperature +=1;
};

Thermostat.prototype.decreaseTemp = function() {
  return this.temperature -=1;
  //   can decrease up to 10 degrees
  // if the PSModeOn maxtemp can be 25 degrees
  // if the PSMModeOff maxtemp can be 32 degree
};

Thermostat.prototype.PSModeOn = function() {
  return this.PSMode = true;
  // PSM mode is ON by default
  // On and OFF
}


Thermostat.prototype.PSModeOff = function() {
  return this.PSMode = false;
}

function reset(){
  // resets the temp to 20
}

function print(){
  temp;
  document.getElementById('temp').innerHTML = temp;
}

