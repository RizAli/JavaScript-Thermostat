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

// if the PSModeOn maxtemp can be 25 degrees
// if the PSMModeOff maxtemp can be 32 degree
Thermostat.prototype.increaseTemp = function() {
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

//   can decrease up to 10 degrees
Thermostat.prototype.decreaseTemp = function() {
    if (this.temperature < 10) {
      alert("Sorry the minimum temperature is: " + this.minTemp + " degrees");
      return this.temperature = 10;
    } else {
      return this.temperature -= 1;
    }
};


// PSM mode is ON by default
// On and OFF
Thermostat.prototype.PSModeOn = function() {
  return this.CurrentPSMode = true;
}

Thermostat.prototype.PSModeOff = function() {
  return this.CurrentPSMode = false;
}

// resets the temp to 20
Thermostat.prototype.resetTemp = function() {
  return this.temperature = 20;
}

