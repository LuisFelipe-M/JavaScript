let jogador = "Luis Felipe";
let vidas = 3;
let municao = 100;
let pontos = 0;
let tiros = 1500;
let acertos = 750;
let mediaDeAcertos = (acertos / tiros) *100;

document.write("Jogador: <span style ='color:#F00'>" + jogador + "</span><br>");
document.write("Vidas: <span style ='color:#F00'>" + vidas + "</span><br>");
document.write("Munição: <span style ='color:#F00'>" + municao + "</span><br>");
document.write("Pontos: <span style ='color:#F00'>" + (pontos + (vidas * 10)) + "</span><br>");
document.write("Média de acertos: <span style ='color:#F00'>" + mediaDeAcertos + "</span><br>");

let nome;
nome = prompt("Coloque seu nome");
document.writeln("Olá" + nome);

let energia = 100;
let velocidade;

if((energia > 80) && (energia <= 100)) {
    document.write("Energia alta");
    velocidade = 100;
}
else if((energia > 60) && (energia < 79)) {
    document.write("Energia boa");
    velocidade = 80;
}
else if((energia > 40) && (energia < 59)) {
    document.write("Jogador media");
    velocidade = 60;
}
else if((energia > 20) && (energia < 39)) {
    document.write("Jogador baixa");
    velocidade = 40;
}
else if((energia > 1) && (energia < 19)) {
    document.write("Jogador crítica");
    velocidade = 20;
}
else {
    document.write("Jogador morto");
    velocidade = 0;
}

tx=document.getElementById("texto").innerHTML;
document.write("<br>" + "Texto da tag p:" + tx);

tagP = document.getElementsByTagName("p")[0];
document.write("<br>" + tagP.innerHTML);

var ps = document.querySelectorAll("p");
ps[0].style.backgroundColor="#F00";