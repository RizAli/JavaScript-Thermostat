var Thermostat = function(){
  this.temperature = 20;
  this.CurrentPSMode = true;
  this.maxTemp = 25;
  this.minTemp = 10;
};

Thermostat.prototype.temp = function() {
  return this.temperature;
};

Thermostat.prototype.PSMode = function() {
  return this.CurrentPSMode;
};

Thermostat.prototype.increaseTemp = function() {
    // if the PSModeOn maxtemp can be 25 degrees
  // if the PSMModeOff maxtemp can be 32 degree
  if (this.temperature > 25 && this.CurrentPSMode === true) {
    alert("on max temp is 25");
    return this.temperature = 25;
  } else if (this.temperature > 32 && this.CurrentPSMode === false) {
    alert("off max temp is 32");
    return this.temperature = 32;
  } else {
    return this.temperature +=1;
  }



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
  return this.CurrentPSMode = true;
  // PSM mode is ON by default
  // On and OFF
}


Thermostat.prototype.PSModeOff = function() {
  return this.CurrentPSMode = false;
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

