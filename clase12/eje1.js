import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su nombre: ", (nombre)=>{
    rl.question("Ingrese su edad: ", (edad)=>{
        
        edad = parseInt(edad);

        if(edad >= 0 && edad <= 12){
            console.log(`${nombre}Es una persona muy joven`)
        }else if(edad >= 18 && edad <= 25){
            console.log(`${nombre}Es una persona adulta joven`)
        }else{
            console.log(`${nombre}Es una persona vieja`);
            
        }

        rl.close();

    })
})