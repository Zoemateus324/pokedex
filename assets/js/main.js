const offset = 0
const limit = 10
const url = `https://pokeapi.co/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}



function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ol class="types">
                    
                       ${pokemon.types.map((type)=> `<li class="type ${pokemon.type}"> ${type}</li>`).join('')}
                      
                    </ol>
        <img src="${pokemon.photo}" alt="${pokemon.name}">
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