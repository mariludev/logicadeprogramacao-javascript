let base = 2; 
let expoente = 3; 
let resultado = 1; 

if (expoente < 0) {
    base = 1 / base; 
    expoente = -expoente; 
}

for (let i = 0; i < expoente; i++) {
    resultado *= base; 
}

console.log(`O resultado de ${base} elevado a ${expoente} é ${resultado}.`);