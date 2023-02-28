import React from 'react';
import axios from 'axios';
import Cats from './Cats';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import CatCreateForm from './CatCreateForm';

const SERVER = process.env.REACT_APP_SERVER;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
    }
  }

  componentDidMount() {
    this.fetchCats();
  }

  async fetchCats(location = null) {
    let apiUrl = `${SERVER}/cats`;

    if (location) {
      apiUrl += `?location=${location}`;
    }

    try {
      const response = await axios.get(apiUrl);
      this.setState({cats: response.data});
    } catch (error) {
      console.error(error);
    }
  }

  handleLocationSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    console.log({ location });
    this.fetchCats(location);
  }

  catCreateHandler = async (catInfo) => {
    try {
      let apiUrl = `${SERVER}/cats`;
      await axios.post(apiUrl, catInfo);
      this.fetchCats();
    } catch (error) {
      console.error(error);
    }
  }

  handleDelete = async (cat) => {
    try {
      let apiUrl = `${SERVER}/cats/${cat._id}`;
      await axios.delete(apiUrl);
      this.fetchCats();
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (

        <Router>
          <nav>
            <h1>World of Cats</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <Switch>
            <Route exact path="/">

              <div>
                <Cats cats={this.state.cats} onDelete={this.handleDelete} />
                <h2>Filter by location</h2>
                <form onSubmit={this.handleLocationSubmit}>
                  <input name="location" />
                  <button>ok</button>
                </form>

                <CatCreateForm onCreate={this.catCreateHandler}/>
              </div>

            </Route>
            <Route path="/about">
              <h1>About Page Here</h1>
            </Route>

          </Switch>
        </Router>

    )
  }
}



export default App;
