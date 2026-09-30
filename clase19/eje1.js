/* for(i = 0; i <= 5; i++){
    console.log(`${i}.¡Bienvenido!`);
    
} */

    import readline from "node:readline";

    const rl= readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });

    rl.question("¿Cuanto dinero ahorra cada dia?: ", (respueta)=>{
        const ahorroDiario = Number(respueta);

        let ahorroTotal = 0;

        for(let dia = 1; dia <= 5; dia++){

            ahorroTotal = (ahorroTotal + ahorroDiario)
            console.log(`Día ${dia} ahorro: ${ahorroTotal.toFixed(2)}`);
        };

        console.log(`\nAhorro total: ${ahorroTotal.toFixed(2)}`);
        rl.close();

    });