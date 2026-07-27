//1 - IMPORTAR MODULO
import readline from "node:readline";

//2 - crear la interfas
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//hacemos la pregunta al usuario
// rl.question("¿Cual es tu nombre? ", function(nombre){
//     rl.question("¿En que ciudad vives? ", function(ciudad){
//          rl.question("¿Cual es tu color favorito? ", function(color_fav){
//             rl.question("Escribe dos palabras: ", function(palabras){
//                 console.log(`Te llamas ${nombre}, vives en ${ciudad}, tu color favorito es el${color_fav} y tus dos palabras son "${palabras}"`)
//                 rl.close();
//             });
//         });
//     });
// });

rl.question("Ingrese un primer numero:", function(num1){
    rl.question("Ingrese un segundo numero:", function(num2){
         
        num1 = Number(num1);
        num2 = Number(num2);

        let suma = num1 + num2

        console.log(`La suma de los dos numeros es: ${suma}`)
        rl.close();
    });
});

