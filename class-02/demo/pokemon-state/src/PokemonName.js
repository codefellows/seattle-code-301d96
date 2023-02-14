import React from 'react';

class PokemonName extends React.Component {

  render() {
    return (
      <h2>{this.props.name}</h2>
    )
  }

}

export default PokemonName;
