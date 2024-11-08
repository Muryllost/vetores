const entrada = require('readline-sync')




function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  function combination(n, k) {
    return factorial(n) / (factorial(k) * factorial(n - k));
  }
  
  function permutation(n, k) {
    return factorial(n) / factorial(n - k);
  }
  
  console.log("Digite o número de elementos:");
  var elements = parseInt(entrada.question('3numeros'));
  
  console.log("Digite o número de elementos a escolher:");
  var choose = parseInt(entrada.question('3numeros'));
  
  var n = elements;
  var k = choose;
  
  var comb = combination(n, k);
  var perm = permutation(n, k);
  
  console.log(`Combinações de ${n} elementos escolhendo ${k}: ${comb}`);
  console.log(`Permutações de ${n} elementos escolhendo ${k}: ${perm}`);
