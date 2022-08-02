

var biblioteca = ["cachecol", "sapato", "gravata"]
var dica1 = ['pescoço', 'usado no frio ou calor', 'tem nó'];
var dica2 = ['usado no frio', 'aberto ou fechado', 'social'];
var dica3 = ['pode usar enrolado', 'usado no pé', 'colarinho'];

var qtde = biblioteca.length - 1;
var pos = Math.round(Math.random() * qtde);
var palavra = biblioteca[pos];
var tam = palavra.length;
var cxLetras = [];
var acertos;
var errosMax = 7
var erros = 0;
var acertou = false;
var jogando = false;
var jog;
var tracos_sorteado = "";
var desconto = 50;

console.log(palavra);

function atualizaTela(palavra, desconto) {
	var palavrapicotada = ''
	for (i = 0; i < palavra.length; i++) {
		palavrapicotada = palavrapicotada + palavra[i] + " "
	}
	var palavraSorteada = document.querySelector('.palavraSorteada');
	palavraSorteada.innerText = palavrapicotada
	var descontela = desconto + "%"
	var pontos = document.querySelector('.descontoAtual');
	pontos.innerText = descontela
}
function defineLetras(l) {
	var obj;
	for (var i = 0; i < 20; i++) {
		obj = document.getElementById("letra" + i).value = "";
		obj = document.getElementById("letra" + i).style.display = "none";
	}
	for (var i = 0; i < l; i++) {
		obj = document.getElementById("letra" + i).style.display = "inline-block";
	}

}

function inicio() {
	for (var i = 0; i < tam; i++) {
		tracos_sorteado = tracos_sorteado + '_';
	}
	atualizaTela(tracos_sorteado, desconto);
}
function inicia(botao) {
	var palavra_atual = '';
	var erro = true;
	for (var i = 0; i < tam; i++) {
		if (palavra[i] == botao) {
			palavra_atual = palavra_atual + botao;
			erro = false
		}
		else {
			palavra_atual = palavra_atual + tracos_sorteado[i];
		}
	}
	tracos_sorteado = palavra_atual;
	if (erro) {
		desconto = desconto - 10;
	}
	atualizaTela(tracos_sorteado, desconto)
	if (tracos_sorteado == palavra) {
		ganhou()
	}
	else if (desconto == 0) {
		errou()
	}
}
function dica(id) {
	if (id == "Dica 1") {
		var lugarDaDica = document.querySelector(".dica1");
		lugarDaDica.innerText=dica1[pos];
	}
	else if (id == "Dica 2") {
		var lugarDaDica = document.querySelector(".dica2");
		lugarDaDica.innerText=dica2[pos];
	}
	else if (id == "Dica 3") {
		var lugarDaDica = document.querySelector(".dica3");
		lugarDaDica.innerText=dica3[pos];
		
	}
	desconto = desconto - 10;
	if (desconto == 0) {
		errou()
	}
	atualizaTela(tracos_sorteado, desconto);

}

function ganhou() {
	var motivacional = document.querySelector('.fraseMotivacional')
	var frase = "Parabéns, você ganhou " + desconto + "% de desconto!"
	motivacional.innerText = (frase);
	var teclado = document.querySelector("#keyboard");
	teclado.remove();
}
function errou() {
	var motivacional = document.querySelector('.fraseMotivacional')
	var frase = "Infelizmente não foi desta vez."
	motivacional.innerText = (frase);
	var teclado = document.querySelector("#keyboard");
	teclado.remove();
}
