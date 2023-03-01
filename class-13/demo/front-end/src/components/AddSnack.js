import React from 'react';

import { Card, Form, Button } from 'react-bootstrap';

class AddSnack extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    };
  }

  handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const formData = this.state.formData;
    formData[field] = value;
    this.setState({ formData });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreateSnack(this.state.formData)
  }

  render() {

    return (
      <Form data-testid="add-form" onSubmit={this.handleSubmit}>
        <Card style={{ width: '18rem' }}>
          <Card.Header>Add Snack</Card.Header>
          <Card.Body>
            <Form.Group>
              <Form.Label>Snack Name</Form.Label>
              <Form.Control type="text" placeholder="Snack name" data-testid="add-form-name" name="name" onChange={this.handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Description" data-testid="add-form-description" name="description" onChange={this.handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Rating</Form.Label>
              <Form.Control type="number" placeholder="Rating" data-testid="add-form-rating" name="rating" onChange={this.handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">Add Snack</Button>
          </Card.Body>
        </Card>
      </Form>
    );
  }
}

export default AddSnack;
