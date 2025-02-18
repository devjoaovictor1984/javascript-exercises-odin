const repeatString = function(string, num) {
    let result = ''; //inicializa uma string vazia  para armazenar o resultado

    if (num < 0) return 'ERROR'; // Se num for negativo, retorna 'ERROR'

    for (let i = 0; i < num; i++) { // Repete a string 'num' vezes
        
        result += string;
    }

    return result; // Retorna a string concatenada

};

// Do not edit below this line
module.exports = repeatString;
