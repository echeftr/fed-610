let list = document.getElementById("pokemon-list");

function getPokemon(id, num) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(function (response) {
    // console.log(response);
    response.json().then(function (pokemon) {
      //   console.log(pokemon.name);
      createPokemon(pokemon, num);
    });
  });
}

function getPokemons() {
  let firstId = Math.round(Math.random() * 150);
  let secondId = Math.round(Math.random() * 150);

  getPokemon(firstId, 1);
  getPokemon(secondId, 2);
}

function createPokemon(pokemon, num) {
  let item = list.querySelector(`#pokemon${num}`);

  let image = item.getElementsByTagName("img")[0];
  image.setAttribute("src", pokemon.sprites.front_default);

  let name = item.getElementsByTagName("h3")[0];
  name.textContent = pokemon.name;
}
// getPokemon(2)
// getPokemon(5)
// getPokemon(7)
// getPokemon(20)

getPokemons();
