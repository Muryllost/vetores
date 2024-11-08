const entrada = require('readline-sync')

let palavras = []

for(let i = 0; i < 10; i++)
{
  palavras.push(entrada.question(`digite a palavra: `))
}
  
palavras.sort()
console.log(`ordem alfabetica ${palavras.join(', ')}`)
