// 1- Una institución educativa organiza un evento y dispone de 20 entradas para vender. Cada entrada tiene un costo de $5.
// Desarrolle un programa en JavaScript utilizando la estructura while que permita:
// 1. Simular la venta de las 20 entradas.
// 2. Mostrar el número de entrada vendida y el dinero acumulado.
// 3. Calcular el total recaudado al finalizar las ventas.
// 4. Si la recaudación total es igual o superior a $100, mostrar el mensaje: "Meta de recaudación alcanzada"

let entrada = 1;
let total = 0;

while (entrada <= 20){
    total +=5;
    console.log(`Entrada ${entrada} vendida. \nTotal: $${total}`);
    entrada ++;
}

console.log(`total recaudado $${total}`);

if(total >= 100){
    console.log(`Meta de recaudacion alcanzada`);
    
}

