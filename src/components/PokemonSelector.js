import React from "react"

const PokemonSelector = (props) => {
    const options = props.pokemon.map((pokemon, id) => {
        return <option value={id} key={id}>{pokemon.name}</option>
    })

    function handleChange(e){
        props.onPokemonSelected(e.target.value);
    }

    return(
        <select id="Pokemon-Selector" onChange={handleChange} defaultValue="default">
            <option disabled value="default">Choose a Pokemon...</option>
            {options}
        </select>

    )

}

export default PokemonSelector;