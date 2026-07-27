import console from "node:console";
import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese una cantidad de horas: ", function(horas){
    horas = Number(horas);

    const minutos = (horas * 60);
    console.log(`Estas horas en minutos son: ${minutos}s`)
    rl.close();
})