
// Tipos de dados
var tituloPagina = "Gosto de Doce - Perfil de Usuário";
var contagemPerfis = 10;
var perfilUsuario = { nome: "João", idade: 25, ocupacao: "Chef confeiteiro" };
var estaConectado = true;
var campoNaoPreenchido = null;
document.getElementById("cabeçalho").innerHTML = tituloPagina;
document.getElementById("perfil").innerHTML = perfilUsuario.nome;
document.getElementById("funçao").innerHTML = perfilUsuario.ocupacao;
document.getElementById("conectado").innerHTML = campoNaoPreenchido;
document.getElementById("campo").innerHTML = estaConectado;

// tipos de bolo
var bolo1 = { nome: "chocolate", valor: 27.00};
var bolo2 = { nome: "baunilha", valor: 27};
var bolo3 = { nome: "cenoura c/ chocolate", valor: 27};
document.getElementById("bolo1").innerHTML = bolo1.nome;
document.getElementById("bolo2").innerHTML = bolo2.nome;
document.getElementById("bolo3").innerHTML = bolo3.nome;

// Objetos
var perfil1 = { nome: "Paula", idade: 30, ocupacao: "Confeiteira" };
var perfil2 = { nome: "Paula", idade: 35, ocupacao: "Padeiro" };
var perfil3 = { nome: "Paula", idade: 28, ocupacao: "Chef de cozinha" };
var perfil4 = { nome: "Paula", idade: 32, ocupacao: "Gerente da confeitaria" };
var perfil5 = { nome: "Paula", idade: 27, ocupacao: "Atendente de balcão" };
document.getElementById("funcionario1").innerHTML = perfil1.nome;
document.getElementById("funcionario2").innerHTML = perfil2.ocupacao;
document.getElementById("funcionario3").innerHTML = perfil3.ocupacao;
document.getElementById("funcionario4").innerHTML = perfil4.ocupacao;
document.getElementById("funcionario5").innerHTML = perfil5.ocupacao;


// Funções 
function exibirPerfil() {
    var div = document.getElementById("funcionario1");
    div.style.display = "block";
    var div = document.getElementById("funcionario2");
    div.style.display = "block";
    var div = document.getElementById("funcionario3");
    div.style.display = "block";
    var div = document.getElementById("funcionario4");
    div.style.display = "block";
    var div = document.getElementById("funcionario5");
    div.style.display = "block";
   
}
  
function ocultarPerfil() {
    var div = document.getElementById("funcionario1");
    div.style.display = "none";
    var div = document.getElementById("funcionario2");
    div.style.display = "none";
    var div = document.getElementById("funcionario3");
    div.style.display = "none";
    var div = document.getElementById("funcionario4");
    div.style.display = "none";
    var div = document.getElementById("funcionario5");
    div.style.display = "none";
}
// Strings e Métodos de String
var slogan = "Celebre os sabores doces!";
var bio = "Sou apaixonado por confeitaria e adoro criar doces incríveis.";
var localizacao = "Rua dos Doces, 123 - Cidade Doce";

function exibirendereco(){
    document.getElementById("slogan").innerHTML = slogan;
    document.getElementById("bio").innerHTML = bio;
    document.getElementById("localizacao").innerHTML = localizacao;
}
var sloganUpperCase = slogan.toUpperCase();
var bioLowerCase = bio.toLowerCase();
var localizacaoArray = localizacao.split(" ");
var localizacaoSlice = localizacao.slice(0, 10);
var bioReplace = bio.replace("incríveis", "deliciosos");

// Busca em Strings
var searchString = "confeitaria";
var indexOfString = bio.indexOf(searchString);
var lastIndexOfString = bio.lastIndexOf(searchString);
var searchStringResult = bio.search(searchString);
var matchString = bio.match(/apaixonado/gi);
var includesString = bio.includes("criar");

// Modelos de String
var mensagemPerfil1 = `Olá, ${perfil1.nome}! Seu perfil está completo.`;
var mensagemPerfil2 = `Olá, ${perfil2.nome}! Aproveite as delícias da confeitaria.`;
var mensagemPerfil3 = `Olá, ${perfil3.nome}! Inspire-se na sua jornada como chef.`;
var mensagemPerfil4 = `Olá, ${perfil4.nome}! Obrigado por gerenciar a confeitaria com excelência.`;
var mensagemPerfil5 = `Olá, ${perfil5.nome}! Seu sorriso faz a diferença para nossos clientes.`;

// Eventos
function handleClick() {
    console.log("Clique detectado!");
}
function handleMouseOver() {
    console.log("Mouse sobre o elemento!");
}

function handleMouseOut() {
    console.log("Mouse fora do elemento!");
}

function handleKeyDown(event) {
    console.log("Tecla pressionada: " + event.key);
}  

function handleLoad() {
    console.log("Página carregada com sucesso!");
}

document.getElementById("perfil").addEventListener("click", handleClick);
document.getElementById("perfil").addEventListener("mouseover", handleMouseOver);
document.getElementById("perfil").addEventListener("mouseout", handleMouseOut);
document.addEventListener("keydown", handleKeyDown);
window.addEventListener("load", handleLoad);

