import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`CONVERSIÓN DE MEDIDAS`);
console.log(`\n-----------------------\n`);
console.log(`1. Metro a centímetros \n2. Kilómetros a metros \n3. Horas a minutos \n4. Dias a horas`);

rl.question("Ingrese una opción del menu (1,2,3,4): ", (opcion) => {
    rl.question("Ingres la cantidad a convertir: ", (cantidad) => {

        cantidad = parseFloat(cantidad);
        opcion = parseInt(opcion);
        let resultados;

        
        switch (opcion) {
            case 1:
                console.log(`====|Ha ingresado a conversión de Metro a centímetros|==== `);

                resultados = cantidad * 100;
                console.log(`Resultado: ${resultados},cm`);
                break;

            case 2:
                console.log(`====|Ha ingresado a conversión de Kilómetros a metros|==== `);

                resultados = cantidad * 1000;
                console.log(`Resultado: ${resultados},metros`);
                break;

            case 3:
                console.log(`====|Ha ingresado a conversión de Horas a minutos|==== `);

                resultados = cantidad * 60;
                console.log(`Resultado: ${resultados},minutos`);
                break;

            case 4:
                console.log(`====|Ha ingresado a conversión de Dias a horas|==== `);

                resultados = cantidad * 24;
                console.log(`Resultado: ${resultados},horas`);
                break;
            default:
                console.log(`¡¡Opción no calida!!`);
        }
        rl.close();
    });
});


