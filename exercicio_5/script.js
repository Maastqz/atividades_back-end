let idade = prompt("informe sua idade")

if(idade < 16) {
    console.log("Você não pode votar");
} else if(idade >= 16 && idade < 18) {
    console.log("Voto opcional");
} else if(idade >= 18 && idade < 70) {
    console.log("Voto obrigatório");
} else {
    console.log("Voto opcional");
}