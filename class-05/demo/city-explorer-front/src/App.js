import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

const data = [

  {
    name: 'Seattle',
    lat: 70,
    lon: 80,
  },
  {
    name: "New York",
    lat: 90,
    lon: 100,
  }

];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '', // empty string are falsey, strings with any characters are truthy.
      results: [],
    }
  }

  handleInput = (e) => {
    let value = e.target.value;

    // search our Data for a result!
    let filteredCities= data.filter(city => {
      return city.name.toLowerCase() === value.toLowerCase();
    });

    this.setState({
      searchInput: e.target.value,
      results: filteredCities
    });
  }

  render() {

    let condition = this.state.searchInput && this.state.results.length;
    return (
      <div className="App">
        <header className="App-header">
          <input type="text" onChange={this.handleInput} placeholder="Seattle"/>
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
              <Route path='/maps' element={<h2>Maps Go Here</h2>} />
              <Route path='/weather' element={<h2>Weather Component goes here</h2>} />
            </Routes>
          </BrowserRouter>
          : <h2>Please Search for a city</h2>
        }
      </div>
    );
  }
}

export default App;
