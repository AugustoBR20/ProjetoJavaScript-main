mudaServico();
function mudaServico() {
    let servico = document.getElementById("selectServico").value;
    if (servico == 1) {
        document.getElementById("divIMC").style.display = 'block';
        document.getElementById("divPorcento").style.display = 'none';
        document.getElementById("divOrdenacao").style.display = 'none';
        document.getElementById("divBuscaCEP").style.display = 'none';

    } if (servico == 2) {
        document.getElementById("divIMC").style.display = 'none';
        document.getElementById("divPorcento").style.display = 'block';
        document.getElementById("divOrdenacao").style.display = 'none';
        document.getElementById("divBuscaCEP").style.display = 'none';

    } if (servico == 3) {
        document.getElementById("divIMC").style.display = 'none';
        document.getElementById("divPorcento").style.display = 'none';
        document.getElementById("divOrdenacao").style.display = 'block';
        document.getElementById("divBuscaCEP").style.display = 'none';

    } if (servico == 4) {
        document.getElementById("divIMC").style.display = 'none';
        document.getElementById("divPorcento").style.display = 'none';
        document.getElementById("divOrdenacao").style.display = 'none';
        document.getElementById("divBuscaCEP").style.display = 'block';
    }


}

//peso/(altura * altura)
function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let IMC = peso / (altura * altura);
    IMC = parseFloat(IMC).toFixed(2);
    document.getElementById("resultadoIMC").innerHTML = "O IMC é: " + IMC + "%";


}
function calculaPorcento(){
    let porcento = document.getElementById("porcento").value;
    let valorTotal = document.getElementById("valorTotal").value;
    let resultadoPorcento = (porcento * valorTotal) / 100;
    resultadoPorcento = parseFloat(resultadoPorcento).toFixed(1);
    document.getElementById("resultadoPorcento").innerHTML = "É: " + resultadoPorcento ;
}

function colocaOrdem() {
    let numeros = document.getElementById("numeros").value;
    let numeroFinal = numeros.split(",")
    numeroFinal.sort();
    document.getElementById("resultadoOrdenacao").innerHTML = numeroFinal;
}

async function buscaEndereco() {
    let cep = document.getElementById("endereco").value;
    const resposta = await fetch ('https://brasilapi.com.br/api/cep/v1/' + cep);
    const dados = await resposta.json();
    console.log(dados['city']);
    document.getElementById("pResultadoCEP").innerHTML = dados['city'] + " - " + dados['state'] + ' - ' +  dados['street'] ;
}