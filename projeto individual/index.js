const readline = require ('readline-sync');
// Importa a biblioteca readline sync.
let propriedades = [];
// Cria uma array vazia para armazenar a entrada do usuario
let aux = "";
// inicia a variavel com uma string vazia
while ( aux != 'sair'){
// while cria um laço de repetiçao indefinido, enquanto "sair" nao for digitado
    aux = readline.question('digite a propriedade: ')
// le a entrada do usuario 
    propriedades.push(aux);
// acresenta a entrada do usuario a lista
    aux = readline.question('para sair digite "sair" , para continuar aperte "enter" ')
// reforça o procedimento de sair a cada laço

}

console.log(propriedades.sort().join('\n'));