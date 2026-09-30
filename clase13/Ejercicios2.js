// Ejercicio 2: Una empresa desea evaluar la producción diaria de uno de sus
// empleados.
// Elabore un programa que solicite:
// • Nombre del empleado.
// • Cantidad de productos elaborados.
// • Cantidad de horas trabajadas.
// Calcule el promedio de productos elaborados por hora:
// rendimiento = productos elaborados / horas trabajadas
// Si el rendimiento es mayor a 8 productos por hora, muestre "Rendimiento alto".
// De lo contrario, muestre "Rendimiento regular".
// Muestre el nombre del empleado en mayúsculas, su rendimiento con una cifra
// decimal y el tipo de rendimiento (alto o regular).

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Ingrese su nombre:", (nombre)=>{
    rl.question("Ingrese la cantidad de producto elaborados:", (productos)=>{
        rl.question("Ingrese la cantidad de horas trabajadas:", (horas)=>{

            let productosNum = parseInt(productos);
            let horasNum = parseInt(horas);
            nombre = nombre.toUpperCase()
    
            let rendimiento = productosNum / horasNum;
            let tipoRendimiento;
            
            if (rendimiento > 8){
                tipoRendimiento = "Rendimiento alto"; 
            }else{
                tipoRendimiento = "Rendimiento regular";
            }                                                                       
            console.log("\n ===============")
            console.log(`\n Nombre:${nombre}\n Rendimiento: ${rendimiento} productos\n Evaluación: ${tipoRendimiento}`);
            
            rl.close();
        });
    });
});