
let qualHeroi = 5 //mudar numero do heroi de 1 a 8
let nomeHeroi = ""
let nivelHeroi = 0
let nivelTipo = ""

switch (qualHeroi) {
    case 1:
        nomeHeroi = "Cianan Guerreiro Antigo"
        nivelHeroi = 230
        break;
    case 2:
        nomeHeroi = "Artgal Valor De Urso"
        nivelHeroi = 1231
        break;
    case 3:
        nomeHeroi = "Ronan Foca Do Mar"
        nivelHeroi = 3233
        break;
    case 4:
        nomeHeroi = "Elowen Sopro De Ouro"
        nivelHeroi = 6236
        break;
    case 5:
        nomeHeroi = "Finnegan O Justo"
        nivelHeroi = 7237
        break;
    case 6:
        nomeHeroi = "Morrigan Grande Rainha"
        nivelHeroi = 8238
        break;
    case 7:
        nomeHeroi = "Marcos Neto de Fionn mac Cumhaill"
        nivelHeroi = 9239
        break;
    default:
        nomeHeroi = "Osgar Rei Guerreiro Lendário"
        nivelHeroi = 12234
        break;
}

if (nivelHeroi < 1000) {
    nivelTipo = "Ferro";
} else if (nivelHeroi >= 1000 && nivelHeroi < 2000) {
    nivelTipo = "Bronze";
} else if (nivelHeroi >= 2000 && nivelHeroi < 5000) {
    nivelTipo = "Prata";
} else if (nivelHeroi >= 5000 && nivelHeroi < 7000) {
    nivelTipo = "Ouro";
} else if (nivelHeroi >= 7000 && nivelHeroi < 8000) {
    nivelTipo = "Platina";
} else if (nivelHeroi >= 8000 && nivelHeroi < 9000) {
    nivelTipo = "Ascendente";
} else if (nivelHeroi >= 9000 && nivelHeroi < 10000) {
    nivelTipo = "Imortal";
} else if (nivelHeroi >= 10000) {
    nivelTipo = "Radiante";
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelTipo + ".");