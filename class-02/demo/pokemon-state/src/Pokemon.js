import React from 'react';
import PokemonName from './PokemonName';
import Image from 'react-bootstrap/Image'

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    // creates state for a component.
    this.state = {
      clicks: 0,
      name: props.name || 'No Name Yet'
    }
  }

  // to change state, use this.setState().
  handleClick = () => {
    // this methods triggers all the updates that need to happen in the browser.
    this.setState({ clicks: this.state.clicks + 1 }); // whatever you pass into here, will change potentially all of state.
  }

  render() {
    console.log(this.state);
    return (
      <div onClick={this.handleClick}>
        <PokemonName name={this.state.name}/>
        <Image thumbnail src={this.props.imageUrl} bsPrefix="yellow-img" />
        <p>Number of clicks: {this.state.clicks}</p>
      </div>
    )
  }
}

export default Pokemon;
