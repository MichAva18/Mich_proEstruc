import readline from "node:readline";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Ingrese el total de su compra: ", (compra)=>{

    compra = parseFloat(compra);

    if(compra >= 50){
        console.log(`Su compra de $${compra} aplica a envio gratis`)
    }else{
        console.log(`Su compra de $${compra} NO aplica a envio gratis`);
        
    }
    rl.close();
})