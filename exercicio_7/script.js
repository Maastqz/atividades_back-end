let cor = prompt("Informe uma cor de CD para saber o seu valor.");

switch(cor) {
    case "verde":
        console.log("O valor do cd verde é R$ 10.00");
        break;

    case "azul":
        console.log("O valor do cd azul é R$ 20.00");
        break;

    case "amarelo":
        console.log("O valor do cd amarelo é R$ 30.00");
        break;

    case "vermelho":
        console.log("O valor do cd vermelho é R$ 40.00");
        break;

    default:
        console.log("A cor informada é inválida");
        break;

}