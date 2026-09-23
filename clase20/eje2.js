// 2.  Un cine necesita mostrar el precio de sus boletos. Solicite al usuario cuántos boletos comprará. 
// Numere los boletos desde 1. Los boletos del 1 al 4 cuestan $4.00 y los boletos con número 5 o mayor tienen un descuento de $1.00. 
// Muestre el precio de cada boleto e indique cuáles tienen descuento. 

import readline from "node:readline";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("¿Cuantos boletos comprará: ", (boletos) => {
    const boletoN = parseInt(boletos, 10);

    for (let numeroB = 1; numeroB <= boletoN; numeroB++) {
        if (numeroB <= 4) {
            console.log(`Boleto ${numeroB} cuesta $4.00`);
        } else {
            console.log(`Boleto ${numeroB} cuesta $3.00 (descuento de $1.00)`);
        }
    }

    rl.close();
});