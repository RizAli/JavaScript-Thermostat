var Thermostat = function(){
  this.temperature = 20;
  this.PSMode_default = true;
  this.maxTemp = 25;
  this.minTemp = 10;
};

Thermostat.prototype.temp = function() {
  return this.temperature;
};

Thermostat.prototype.PSMode = function() {
  return this.PSMode_default;
};

Thermostat.prototype.increaseTemp = function() {
    // if the PSModeOn maxtemp can be 25 degrees
  // if the PSMModeOff maxtemp can be 32 degree
  return this.temperature +=1;
};

Thermostat.prototype.decreaseTemp = function() {
 //   can decrease up to 10 degrees
    if (this.temperature < 10) {
      alert("Sorry the minimum temperature is: " + this.minTemp + " degrees");
      return this.temperature = 10;
    } else {
      return this.temperature -= 1;
    }
};

Thermostat.prototype.PSModeOn = function() {
  return this.PSMode = true;
  // PSM mode is ON by default
  // On and OFF
}


Thermostat.prototype.PSModeOff = function() {
  return this.PSMode = false;
}

Thermostat.prototype.resetTemp = function() {
  return this.temperature = 20;
}


// function reset(){
//   // resets the temp to 20
// }

function print(){
  temp;
  document.getElementById('temp').innerHTML = temp;
}

