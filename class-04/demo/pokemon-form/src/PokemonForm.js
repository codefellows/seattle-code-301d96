import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class PokemonForm extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonName: '',
      pokemonType: '',
    }
  }

  handleInput = (event) => {
    let {name, value} = event.target;
    this.setState({ [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
  }

  handleSelect = (e) => {
    console.log(e.target.value);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="pokemon-name">Pokemon Name</Form.Label>
          <Form.Control onChange={this.handleInput} name="pokemonName" type="text" id="pokemon-name"/>
          <Form.Label htmlFor="pokemon-type">Pokemon Type</Form.Label>
          <Form.Control onChange={this.handleInput} name="pokemonType" type="text" id="pokemon-type" />
          <Form.Select onChange={this.handleSelect}>
            <option value="banana">Fire</option>
            <option value="banana">Water</option>
            <option value="banana">JavaScript</option>
            <option value="banana">Python</option>
          </Form.Select>
          <Button type="submit">Submit Pokemon!</Button>
        </Form.Group>
        {/* <p>{this.state.pokemonName}</p>
        <p>{this.state.pokemonType}</p> */}
      </Form>
    )
  }
}

export default PokemonForm;
