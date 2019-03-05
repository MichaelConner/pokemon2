import React from "react"

const PokemonDetail = ( {pokemon, pokemonDetail}) => {

    if(!pokemon) return null;
    if(!pokemonDetail) return null;

    return (
        <dl>
            <dt>Name:</dt>
            <dd>{pokemon.name}</dd>
            <dt>Image:</dt>
            <dd><img src={pokemonDetail.sprites.front_shiny} alt="picture"></img></dd>

        </dl>
    );

}

export default PokemonDetail