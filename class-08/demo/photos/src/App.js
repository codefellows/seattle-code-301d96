import React from 'react';
import axios from 'axios';
import './App.css';

let access_key = process.env.REACT_APP_LOCATION_KEY;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      locationData: [],
      photoData: []
    }
  }

  // location IQ
  getLocationData = async (queryValue) => {
    let request = {
      url: `https://us1.locationiq.com/v1/search?key=${access_key}&q=${queryValue}&format=json`,
      method: 'GET'
    }
    axios(request)
      .then(response => {
        this.setState({ locationData: response.data }, () => {
          this.getPhotos(this.state.locationData[0].display_name);
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  // Request to Express Server
  getPhotos = async (displayName) => {
    console.log(displayName);
    let request = {
      url: `http://localhost:3001/photos?searchQuery=${displayName}`,
      method: 'GET',
    }
    axios(request)
      .then(response => {
        console.log(response.data);
      });
  }

  // makeRequests = async () => {
  //   this.getLocationData()
  //   .then(() => this.getPhotos(this.state));
  // }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <input type="text" onChange={(e) => this.setState({ searchInput: e.target.value })} />
          <button onClick={() => this.getLocationData(this.state.searchInput)}>Search Photos by Location!</button>
        </header>
      </div>
    );
  }
}

export default App;
