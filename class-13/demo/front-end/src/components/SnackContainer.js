import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import UpdateSnackForm from './UpdateSnack';

class SnackContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedSnack: null,
      showModal: false,
    }
  }
  handleModalClose = () => {
    this.setState({
      selectedSnack: null,
      showModal: false,
    })
  }

  handleSelect = (snack) => {
    this.setState({ selectedSnack: snack, showModal: true });
  }

  render() {

    return (
      <div>
        <section>
          <h2>Current Snacks</h2>
          {
            this.props.snackList.map((snackData) =>
              <Snack key={snackData._id} info={snackData} onSelect={this.handleSelect} onDelete={this.props.onDelete} />
            )
          }
        </section>
        <UpdateSnackForm show={this.state.showModal} snack={this.state.selectedSnack} onUpdate={this.props.onUpdate}  onClose={this.handleModalClose} />
      </div>
    );
  }
}

class Snack extends Component {

  handleClickDelete = () => {
    this.props.onDelete(this.props.info);
  }

  handleClickUpdate = () => {
    this.props.onSelect(this.props.info);
  }

  render() {
    return (
      <Card>
        <Card.Title>
          {this.props.info.name}
        </Card.Title>
        <Card.Subtitle>
          Rating: {this.props.info.rating}
        </Card.Subtitle>
        <Card.Text>
          {this.props.info.description}
        </Card.Text>
        <Button onClick={this.handleClickUpdate} style={{ width: '8rem' }} variant="primary" data-testid={`update-button-${this.props.info.name}`}>Update</Button>
        <Button onClick={this.handleClickDelete} style={{ width: '8rem' }} variant="danger" data-testid={`delete-button-${this.props.info.name}`}>Delete</Button>
      </Card>

    );
  }
}

export default SnackContainer;
