

function acaoBotao() {
var nome, nota01, nota02, passou;

passou = false;    
nome = prompt("Digite o nome:")
nota01 = prompt("Digite a primeira nota:")
nota02 = prompt("Digite a segunda nota")
media = (parseInt(nota01) + parseInt(nota02)) / 2;

if(media >= 50)
    passou = true;
if(passou && (media >= 70))
    document.getElementById("paragrafo").innerText = "Aprovado!" + nome
else
    document.getElementById("paragrafo").innerText = "Reprovado!" + nome   
}



