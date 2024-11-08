const entrada = require('readline-sync')


let letras = ['a','b','c','d','e']

//substituindo a letra a por f
letras[0] = 'f'//coloca o nome da variaves colchete a posiçao do que voce quer mudar

//colocando um novo valor
letras[5] = 'g'

// remove o ultimo item do vetor
letras.pop()

//remove o primeiro item do vetor
letras.shift()

//adiciona o valor no final do vetor
letras.push('i')

//adiciona o valor no começo do vetor 
letras.unshift('j') 

//retorna o tamanho do vetor
console.log(letras.length - 1)

console.log(letras)

let.reverse()



let numeros = [1,2,3]

numeros.splice(1,1)

console.log(numeros)

//pratica em sala

let numeros2 = [1,4,12,25]

let soma = numeros2.reduce((total, Atual) => total + Atual)

console.log(soma)



let vetor = ['a','b','c','d',]

vetor.splice(2,0, 'ola')
console.log(vetor)

//push "e"
vetor[vetor.length] = 'e'

// //pop
for (let i = vetor.length - 1; i > 0 ; i--) 
{
    vetor[i] = vetor[i -1]
}


//shift
for(let i = 0 ; i < vetor.length; i++) 
{
    vetor[i] = vetor[i + 1]
}
vetor.length = vetor.length - 1



console.log(vetor)