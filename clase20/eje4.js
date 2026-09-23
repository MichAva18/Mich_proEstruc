// 4.Un museo permite el ingreso gratuito a cada quinto visitante. Solicite al usuario cuántos visitantes llegarán. 
// Al finalizar, muestre cuántas entradas gratuitas se otorgaron.

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de Visitantes al museo: ", (visitantes) => {

    const visitanteN = parseInt(visitantes);
    let contador = 0;
    
    for (let visitante = 1; visitante <= visitanteN; visitante++) {
        if (visitante % 5 === 0) {
            console.log(`Visitante : ${visitante} obtiene entrada gratuta!!`);
            contador++

        }
    }
    console.log(`Se otorgaron ${contador} entradas gratutas.`);
    
    rl.close();
})