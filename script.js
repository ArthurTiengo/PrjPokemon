const pokemonsCard = document.querySelectorAll(".cartao-pokemon");
const listaSelecaoPokemons = document.querySelectorAll(".pokemon");

//selecionando a tag com a class .imagemLOGO
//Pikachu
let logo = document.querySelector(".imagemLOGO");
let pikachu = document.querySelector(".imagemA");
function aocarregar() {
  pikachu.style.transform = "scale(1.1)";
  logo.style.transform = "scale(1.1)";
}

let audioFundo = document.querySelector(".audioFundo");
let audioPlay = document.querySelectorAll(".play");
function play() {
  audioFundo.play();
}
function pause() {
  audioFundo.pause();
}
let choque = document.querySelector(".choque");
pikachu.addEventListener("click", () => {
  choque.style.display = "block";
  choque.play();
});
//Bulbasauro
let folha = document.querySelector(".folha");
let bulbasauro = document.querySelector(".imagemB");
bulbasauro.addEventListener("click", () => {
  folha.style.display = "block";
  folha.play();
});
//Charmander
let fogo = document.querySelector(".fogo");
let charmander = document.querySelector(".imagemC");
charmander.addEventListener("click", () => {
  fogo.style.display = "block";
  fogo.play();
});
//Gyarados
let agua = document.querySelector(".agua");
let gyarados = document.querySelector(".imagemD");
gyarados.addEventListener("click", () => {
  agua.style.display = "block";
  agua.play();
});
//Gengar
let fanta = document.querySelector(".fantasma");
let gengar = document.querySelector(".imagemE");
gengar.addEventListener("click", () => {
  fanta.style.display = "block";
  fanta.play();
});
//Dragonite
let drago = document.querySelector(".drago");
let dragonite = document.querySelector(".imagemF");
dragonite.addEventListener("click", () => {
  drago.style.display = "block";
  drago.play();
});
//Aviso
let aviso = document.querySelector(".aviso");

function mouseEntrar() {
  pikachu.style.transform = "scale(1.2)";
  bulbasauro.style.transform = "scale(1.3)";
  charmander.style.transform = "scale(1.1)";
  gyarados.style.transform = "scale(1.1)";
  gengar.style.transform = "scale(1.2)";
  dragonite.style.transform = "scale(1.1)";
  logo.style.transform = "scale(1.2)";
  //alternando a opacidade do aviso para 1
  aviso.style.opacity = "1";
  //alternando a escala ou aviso
  aviso.style.transform = "scale(1)";
}

function mouseSair() {
  pikachu.style.transform = "scale(1)";
  bulbasauro.style.transform = "scale(1)";
  charmander.style.transform = "scale(1)";
  gyarados.style.transform = "scale(1)";
  gengar.style.transform = "scale(1)";
  dragonite.style.transform = "scale(1)";
  logo.style.transform = "scale(1.1)";
  aviso.style.opacity = "1";
  aviso.style.transform = "scale(.8)";
}

listaSelecaoPokemons.forEach((pokemon) => {
  //seleciona o elemento html que possuir a classe aberto
  pokemon.addEventListener("click", () => {
    const cartaoPokemonAberto = document.querySelector(".aberto");
    //remove a classe aberto deste pokemon para que as informações dele sejam ocultadas
    cartaoPokemonAberto.classList.remove("aberto");
    //pegando o nome do id do elemento html dentro de uma constante
    const idPokemonSelecionado = pokemon.attributes.id.value;
    const cartaoPokemonParaAbrir = document.getElementById("cartao-" + idPokemonSelecionado);
    cartaoPokemonParaAbrir.classList.add("aberto");
    const PokemonAtivoNaListagem = document.querySelector(".ativo");
    pokemon.classList.add("ativo");
  });
});
