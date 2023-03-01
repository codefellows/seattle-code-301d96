import React from 'react';

import axios from 'axios';

import { Navbar, Container, Row, Col } from 'react-bootstrap';
import Form from './components/AddSnack.js';
import SnackContainer from './components/SnackContainer.js';

const API_SERVER = process.env.REACT_APP_API;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      snacks: []
    }
  }

  handleCreateSnack = async (item) => {
    await axios.post(`${API_SERVER}/snacks`, item);
    this.getSnacks();
  }

  getSnacks = async () => {
    const response = await axios.get(`${API_SERVER}/snacks`);
    const snacks = response.data;
    this.setState({ snacks });
  }

  handleDelete = async (snack) => {
    await axios.delete(`${API_SERVER}/snacks/${snack._id}`);
    this.getSnacks();
  }

  handleUpdate = async (snack) => {
    await axios.put(`${API_SERVER}/snacks/${snack._id}`, snack);
    this.getSnacks();
  }

  async componentDidMount() {
    await this.getSnacks();
  }

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">All the Snacks</Navbar.Brand>
        </Navbar>
        <Container fluid>
          <Row>
            <Col><h1>Who's Hungry?</h1></Col>
          </Row>
          <Row>
            <Col md="auto">
              <Form onCreateSnack={this.handleCreateSnack} />
            </Col>
            <Col>
              <SnackContainer snackList={this.state.snacks} onDelete={this.handleDelete} onUpdate={this.handleUpdate} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
