const entrada = require('readline-sync')

let texto = entrada.question('digite uma palavra, para saber se e palindromo: ')
let reverso = texto.split('').reverse().join('')


if (texto == reverso) 
{
    console.log(`A palavra ${texto} e um palindromo!`)
}
else 
{
    console.log(`A palavra ${texto} nao e um palindromo!`)
}