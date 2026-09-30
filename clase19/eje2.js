 import readline from "node:readline";

    const rl= readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });

    rl.question("¿Cuantas horas duró el prestamo?: ", (hora)=>{

        const horasPrestamo = Number(hora);
        const costoHoras = 2.25;
        let recaudacionTotal = 0;

        for (let prestamo = 1; prestamo <= 4; prestamo++){


            let recaudacion = (horasPrestamo * costoHoras);
            recaudacionTotal = (recaudacionTotal + recaudacion)
            console.log(`Prestamo ${prestamo}: ${recaudacionTotal.toFixed(2)}`);
        };

        console.log(`\nRecaudación total: ${recaudacionTotal.toFixed(2)}`);
        rl.close();
    });