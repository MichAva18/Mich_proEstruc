// 2-Elabore un programa que solicite al usuario su nombre. Posteriormente, obtenga la fecha y hora actual del sistema y muestre la hora completa.
// Si la hora actual es menor a 12, muestre el mensaje "Buenos días" seguido del nombre de la persona.import readline from "node:readline";
import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su nombre", (nombre)=>{
     let fechaActual = new Date();
     console.log(`Fecha actual ${fechaActual.toLocaleDateString()}`);

     let hora = fechaActual.getHours();

     if (hora < 12){
        console.log(`Buen dia ${nombre}`);
        
     }
     rl.close();
     

});
