const fibonacci = function(n) {
    // Converter string para número
    n = parseInt(n, 10);
  
    // Se for 0, retornar 0 (conforme esperado no teste)
    if (n === 0) return 0;
  
    // Se for menor que 0, retornar "OOPS"
    if (n < 0) return "OOPS";
  
    let a = 1, b = 1;
  
    for (let i = 3; i <= n; i++) {
      let next = a + b;
      a = b;
      b = next;
    }
  
    return b;
  };
  
  module.exports = fibonacci;
  