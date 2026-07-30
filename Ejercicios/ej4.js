import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el nombre del producto: ', (nombre) => {
    rl.question('Ingrese el precio del producto unitario: ', (precio) => {
        rl.question('Ingrese la cantidad de productos: ', (cantidad) => {
            const precioN = parseFloat(precio);
            const cantidadN = parseInt(cantidad);
            
            const total = precioN * cantidadN;
            
            console.log(`\n--- RESUMEN DE COMPRA ---`);
            console.log(`Producto: ${nombre}`);
            console.log(`Total a pagar: $${total.toFixed(2)}`);
            rl.close();
        });
    });
});