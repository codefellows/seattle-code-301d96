import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

class UpdateSnackForm extends React.Component {


  handleSubmit = event => {
    event.preventDefault();
    this.props.onUpdate({
      _id: this.props.snack._id,
      name: event.target.formName.value,
      description: event.target.formDescription.value,
      rating: parseInt(event.target.formRating.value),
    });
    this.handleClose();
  };

  handleClose = () => {
    this.props.onClose();
  }


  render() {
    return (
      <Modal show={this.props.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update your Snack</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={this.handleSubmit} className="p-4">
            <Form.Label>
              <h2>
                Update Snack
              </h2>
            </Form.Label>
            <Form.Group className="mb-3" controlId='formName'>
              <Form.Label>Snack Name</Form.Label>
              <Form.Control type="text" placeholder="Snack Name" onChange={this.handleNameChange} defaultValue={this.props.snack?.name} />
            </Form.Group>

            <Form.Group className="mb-3" controlId='formDescription'>
              <Form.Label>Snack Description</Form.Label>
              <Form.Control type="text" placeholder="Snack Description" onChange={this.handleDescriptionChange} defaultValue={this.props.snack?.description} />
            </Form.Group>
            <Form.Group className="mb-3"  controlId='formRating'>
              <Form.Control type="number" placeholder="Snack Rating" onChange={this.handleRatingChange} defaultValue={this.props.snack?.rating} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default UpdateSnackForm;
