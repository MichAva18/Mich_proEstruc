// 1- Elabore un programa que solicite un código con el formato DEP-VEN-2026-045.
// Convierta el código a letras mayúsculas utilizando y obtenga las tres letras de el departamento. 
// Si las  tres letras son "VEN", muestre que el código pertenece al departamento de ventas.
import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el codigo del departamento (Ejemplo: DEP-VEN-2026-045):", (codigo)=>{
    codigo = codigo.toUpperCase();

    let departamento = codigo.slice(4,7);

    console.log(`Eñ codigo ingresado es: ${codigo}`);
    

    if(departamento = "VEN"){
        console.log(`El codigo pertenece al departamento de ventas`);
        
    }else{
        console.log(`El codigo no pertenece al departamento de ventas`);
        
    }

    rl.close();

})