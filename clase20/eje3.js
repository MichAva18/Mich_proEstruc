// 3.Solicite al usuario cuántos productos fabricó una empresa. 
// Los productos cuyo número sea múltiplo de 3 necesitan revisión. 
// Muestre cuáles son y cuántos productos deberán revisarse en total.

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese cuantos productos fabricó la empresa: ", (productos) => {
    const productosN = parseInt(productos);
    let contador = 0;

    for (let ProduFa = 1; ProduFa <= productosN; ProduFa++) {
        if (ProduFa % 3 === 0) {
            console.log(`Producto: ${ProduFa} necesita revisión`);
            contador++
        }
    }
    console.log(`Total de productos para revisar: ${contador}`);
    rl.close();
});