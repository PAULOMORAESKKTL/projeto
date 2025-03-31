import entradaDados from 'readline-sync';
console.log("\nCalculadora de juros\n")
const divida = entradaDados.question("Qual o valor da divida?  R$ ")
const dias_atraso = entradaDados.question("\nQuantos dias de atraso? \n")

let valor_divida = divida
let juros1 = 5;
let juros2 = 10;
let valor_juros;

if (divida == 0 ) {
    console.log("Débitos inexistentes.");
    process.exit();
}
else if (dias_atraso == 0){
    console.log("Você está em dia!")
    process.exit();
}
else if (dias_atraso <= 15){
     valor_juros = (divida / 100) * juros1
}
else{
    valor_juros = (divida / 100) * juros2
};

let total_divida = Number(valor_divida) + Number(valor_juros);
console.log("\nO valor original da divida é:R$ "+divida)
console.log("Dias atrasados:  "+dias_atraso)
console.log("Valor dos juros:   "+valor_juros+"%")
console.log("O valor total da divida é:R$ "+total_divida+"\n")