import readline from "node:readline";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Ingrese su nombre: ", (nombre)=>{
    rl.question("Ingrese su salario actual: ", (salario)=>{
        rl.question("Ingrese los años en la empresa: ", (años)=>{

            salario = parseFloat(salario);
            años = parseInt(años);

            if(años >= 5){

                const bonificacion = salario * 0.10
                 const salarioB = salario + bonificacion
                 console.log(`Hola ${nombre}, por ${años} años de trabajo en la empresa su bonificación es del %10, resivirá $${salarioB} de salario`);
                 
            }else{
                console.log(`Hola ${nombre}, por ${años} años de trabajo en la empresa no obtiene bonificación, su salario sigue siendo de $${salario}`)
            };

            rl.close();

        });
    });
});
