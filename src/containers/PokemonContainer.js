import React, {Component} from "react";
import PokemonSelector from "../components/PokemonSelector";
import PokemonDetail from "../components/PokemonDetail";

class PokemonContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            pokemon: [],
            pokemonDetail: null,
            currentPokemon: null
        };
        

        this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
        this.unbundle = this.unbundle.bind(this);
    }

    componentDidMount(){
        //const url = "http://pokeapi.co/";
        const url = "http://pokeapi.co/api/v2/pokemon/?limit=151";
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({pokemon: data.results}))
    }

    unbundle(id){
        const url_id = parseInt(id)+1;
        const url = "http://pokeapi.co/api/v2/pokemon/" + url_id + "/";
        console.log("fetch data");
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({pokemonDetail: data}))
    }

    handlePokemonSelected(id) {
        //id is actually the index - change later!!!
        const selectedPokemon = this.state.pokemon[id];
        this.unbundle(id);
        this.setState({currentPokemon: selectedPokemon});

    }

    render(){
        return(
            <div>
                <h2>Pokemon</h2>
                <PokemonSelector pokemon={this.state.pokemon} onPokemonSelected={this.handlePokemonSelected} />
                <PokemonDetail pokemon={this.state.currentPokemon} pokemonDetail={this.state.pokemonDetail} />
            </div>
        )
    }
}

export default PokemonContainer;