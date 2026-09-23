// 1. Elabore un programa que solicite al usuario un número y muestre su tabla de multiplicar del 1 al 10 utilizando.

import { log } from "node:console";
import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Ingrese un numero para ver su tabla de multiplicación:", (num) => {
    const numN = Number(num);

    for (let multiplicacion = 1; multiplicacion <= 10; multiplicacion++) {
        const resultado = numN * multiplicacion;
        console.log(`${numN} x ${multiplicacion} = ${resultado}`);
    }

    rl.close();
});