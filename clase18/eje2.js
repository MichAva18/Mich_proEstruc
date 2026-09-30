import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Ingrese el Nombre del producto: ", (producto) => {
    rl.question("Ingrese el Precio unitario del producto: ", (precio) => {
        rl.question("Ingrese Cantidad comprada: ", (cantidad) => {
            rl.question("Ingrese una opción del menu (1,2,3,4): ", (opcion) => {

                let productoMayus = producto.toLocaleUpperCase();
                precio = parseFloat(precio);
                cantidad = parseFloat(cantidad);
                opcion = parseInt(opcion);
                let total;

                console.log(`\n==========================================\n`);
                console.log(`\n1. Compra normal (no aplica ningún cargo adicional) \n2. Compra con envío (agregar $3.50 al total)\n3. Compra con empaque especial (agregar $2.00 al total)`);

                switch (opcion){
                    case 1:
                        total = precio * cantidad
                        break
                    case 2:
                        total = (precio * cantidad) + 3.50;
                        break
                    case 3:
                        total = (precio * cantidad) + 2.00;
                }
                console.log(`\nProducto: ${productoMayus}.\nCantidad: ${cantidad} \nTotal a pagar: ${total.toFixed(2)}`);

                rl.close();
            })
        })
    })
})