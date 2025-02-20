const convertToCelsius = function(fahrenheit) {
  return Math.round(((fahrenheit - 32) * 5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  return Math.round(((celsius * 9 / 5) + 32) * 10) / 10;
};

// Exportamos ambas as funções dentro de um objeto
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
