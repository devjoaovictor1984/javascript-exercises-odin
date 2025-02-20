const pigLatin = function(sentence) {
    return sentence.split(' ').map(word => {
      // Expressão regular para capturar a parte da palavra e a pontuação final
      let match = word.match(/^([a-zA-Z]+)([^a-zA-Z]*)$/);
      if (!match) return word; // Mantém palavras não processáveis, como números e símbolos
  
      let [_, letters, punctuation] = match;
  
      // Se a palavra começa com vogal, adicionamos 'ay' no final
      if (/^[aeiouAEIOU]/.test(letters)) {
        return letters + "ay" + punctuation;
      }
  
      // Se a palavra começa com "qu", movemos os dois juntos
      if (/^qu/i.test(letters)) {
        return letters.substring(2) + letters.substring(0, 2) + "ay" + punctuation;
      }
  
      // Se a palavra tem "qu" após uma consoante, movemos tudo antes de "qu"
      let quMatch = letters.match(/^([^aeiouAEIOU]*qu)(.*)$/i);
      if (quMatch) {
        return quMatch[2] + quMatch[1] + "ay" + punctuation;
      }
  
      // Para palavras normais, movemos o primeiro bloco de consoantes
      let consonantCluster = letters.match(/^[^aeiouAEIOU]+/)[0];
      return letters.substring(consonantCluster.length) + consonantCluster + "ay" + punctuation;
    }).join(' ');
  };
  
  module.exports = pigLatin;
  