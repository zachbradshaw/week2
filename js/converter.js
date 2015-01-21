var cupValue = 0,
    quartValue = 0,
    meterValue = 0,
    yardValue = 0,
    fahrValue = 0,
    celValue = 0;

// functions for quart and cup conversions
function convertCup() {
  alert(cupValue + " cup(s) is equal to " + cupValue / 4 + " quart(s)!");
}

function convertQuart() {
  alert(quartValue + " quart(s) is equal to " + quartValue * 4 + " cup(s)!");
}

// functions for meter and yard conversions
function convertMeter() {
  alert(meterValue + " meter(s) is equal to " + meterValue * 1.09361 + " yard(s)!");
}

function convertYard() {
  alert(yardValue + " yard(s) is equal to " + yardValue * 0.9144) + " meter(s)!";
}

// functions for temperature conversions
function convertFahr() {
  alert(fahrValue + " degree(s) Fahrenheit is equal to " + (fahrValue - 32) * 5 / 9
  + " degree(s) Celsius!");
}

function convertCel() {
  alert(celValue + " degree(s) Celsius is equal to " + ((celValue * 9) / 5 + 32)
  + " degree(s) Fahrenheit");
}

function setCupValue(cupValueString) {
  cupValue = Number(cupValueString);
}

function setQuartValue(quartValueString) {
  quartValue = Number(quartValueString);
}

function setMeterValue(meterValueString) {
  meterValue = Number(meterValueString);
}

function setYardValue(yardValueString) {
  yardValue = Number(yardValueString);
}

function setFahrValue(fahrValueString) {
  fahrValue = Number(fahrValueString);
}

function setCelValue(celValueString) {
  celValue = Number(celValueString);
}
