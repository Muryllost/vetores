const entrada = require('readline-sync')

let palavrasPro = ['bom', 'mau', 'sim', 'não']

let texto = entrada.question('Insira um texto de no maximo 100 caracteres: ').toLowerCase()
texto.slice(0, 100)

let palavrasEnc = palavrasPro.filter(palavra => texto.includes(palavra))

if (palavrasEnc.length > 0) 
{
  console.log(`As seguintes palavras foram encontradas no texto: ${palavrasEnc.join(',')}`)
} 
else 
{
  console.log('Nenhuma das palavras procuradas foi encontrada no texto.')
}