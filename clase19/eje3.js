  import readline from "node:readline";

    const rl= readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });

    rl.question("¿Cuanto dinero gasta diario en transporte?: ", (respueta)=>{
        const gastoDiario = Number(respueta);

        let gastoTotal = 0;

        for(let dia = 1; dia <= 5; dia++){

            ahorroTotal = (gastoTotal + gastoDiario)
            console.log(`Día ${dia} ahorro: ${gastoTotal.toFixed(2)}`);
        };

        console.log(`\nAhorro total: ${gastoTotal.toFixed(2)}`);
        rl.close();

    });