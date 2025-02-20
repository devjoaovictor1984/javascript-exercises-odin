const sumAll = function(a, b) {
    if (
      typeof a !== "number" || 
      typeof b !== "number" || 
      a < 0 || 
      b < 0 || 
      !Number.isInteger(a) || 
      !Number.isInteger(b)
    ) {
      return "ERROR";
    }
  
    let start = Math.min(a, b);
    let end = Math.max(a, b);
    let sum = 0;
  
    for (let i = start; i <= end; i++) {
      sum += i;
    }
  
    return sum;
  };
  
  module.exports = sumAll;
  