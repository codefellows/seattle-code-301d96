import React from 'react';
import axios from 'axios';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

const ACCESS_TOKEN = process.env.REACT_APP_LOCATION_ACCESS_TOKEN;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '', // empty string are falsey, strings with any characters are truthy.
      results: [],
      error: null
    }
  }

  handleSearch = async (e) => {
    try {
      let request = {
        url: `https://us1.locationiq.com/v1/search?key=${ACCESS_TOKEN}&q=${this.state.searchInput}&format=json`,
        method: 'GET'
      }
      let response = await axios(request);

      this.setState({
        results: response.data
      });
    } catch (e) {
      console.log(e);
      this.setState({ error: e });
    }
  }

  // async is just syntactic sugar, it just delays code like a callback
  handleInput = async (e) => {
    let value = e.target.value;

    // this changes the state object.
    this.setState({
      searchInput: value,
    });
  }

  render() {

    let condition = this.state.searchInput && this.state.results.length;
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <input type="text" onChange={this.handleInput} placeholder="Seattle"/>
          <button onClick={this.handleSearch}>Explore!</button>
        </header>
        {condition
          ? <BrowserRouter>
            <nav>
              <h2>Navigate to a feature listed below</h2>
              <ul>
                <li>
                  <Link to={`/maps`}>Maps</Link>
                </li>
                <li>
                  <Link to={`/weather`}>Weather</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path='/maps' element={
              <div>
                {this.state.results.map(city => (
                  <>
                    <h2>{city.display_name}</h2>
                    <img src={city.icon} alt={city.display_name} />
                  </>
                ))}
              </div>
            } />
              <Route path='/weather' element={<h2>Weather Component goes here</h2>} />
            </Routes>
          </BrowserRouter>
          : <h2>Please Search for a city</h2>
        }
        {this.state.error
          ? <p>
              Something went wrong: {this.state.error.message}
              <button onClick={() => this.setState({ error: null })}>Dismiss</button>
            </p>
          : null}
      </div>
    );
  }
}

export default App;
