const palindromes = function(string) {
    // Remove pontuação e espaços e converte para minúsculas
    const cleanedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  
    // Verifica se a string é igual à sua versão invertida
    return cleanedString === cleanedString.split("").reverse().join("");
  };
  
  module.exports = palindromes;
  