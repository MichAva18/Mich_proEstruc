// 2- Una fábrica de productos tecnológicos necesita fabricar al menos 250 unidades para completar un pedido. Actualmente tiene 40 unidades 
// disponibles y produce 35 unidades adicionales cada día.
// Desarrolle un programa en JavaScript utilizando la estructura while que permita:
// 1. Mostrar el número de día de producción.
// 2. Calcular las unidades acumuladas después de cada jornada.
// 3. Repetir el proceso mientras la producción sea menor a 250 unidades.
// 4. Mostrar cuántos días fueron necesarios para alcanzar o superar la meta.
// // 5. Indicar cuántas unidades se produjeron en total.


let produccion = 40;
let dia = 0;

while(produccion < 250){

    dia ++;
    produccion +=35;
    console.log(`Dia ${dia}: ${produccion} unidades acumuladas`);
    
}

console.log(`Meta alcanzada en ${dia} dias \nProduccion total: ${produccion} unidades`);
