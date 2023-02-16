import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonForm from './PokemonForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokedex: []
    }
  }

  // this is leaking form specific stuff into our app
  // catchPokemon = (event) => {}

  catchPokemon = (pokemon) => {
    // this.state.pokedex.push(pokemon);
    this.setState({ pokedex: [...this.state.pokedex, pokemon] });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PokemonForm onSubmit={this.catchPokemon} />
          {this.state.pokedex.map((pokemon, idx) => <div key={idx}><p>Pokemon Name: {pokemon.pokemonName}</p><p>Pokemon Type: {pokemon.pokemonType}</p></div>)}
        </header>
      </div>
    );
  }
}

export default App;
