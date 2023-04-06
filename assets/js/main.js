const offset = 0
const limit = 10
const url = `https://pokeapi.co/v2/pokemon?offset=${offset}&limit=${limit}`
function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ol class="types">
                     ${pokemon.types.map((type) => '<li class"type>${type</li>')}
                    </ol>
        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
    </div>
    </li> 
`
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons) => {
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        pokemonList.innerHTML += convertPokemonToLi(pokemon)

    }

})
