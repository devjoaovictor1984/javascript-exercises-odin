const caesar = function(string, shift) {
    return string.split('').map(char => {
      // Obtemos o código ASCII do caractere
      let code = char.charCodeAt(0);
  
      // Se for uma letra maiúscula (A-Z)
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26 + 26) % 26 + 65);
      }
      
      // Se for uma letra minúscula (a-z)
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift) % 26 + 26) % 26 + 97);
      }
  
      // Se não for uma letra (ex: pontuação, espaço), mantemos o caractere original
      return char;
    }).join('');
  };
  
  module.exports = caesar;
  