# Warm Up 08 Solution

## App.js

```js
import React from 'react';
import axios from 'axios';

const SERVER = 'http://localhost:3001';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      bananas = ''
    }
  }

  async componentDidMount() {
    // code goes here
    try {
      let request = {
        url: SERVER + '/bananas',
        method: 'GET',
      }
      let response = await axios(request);
      this.setState({ banana: response.data });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return(
      <div className="app">
        <h1>Bananas!</h1>

        {this.state.bananas &&
          <p>{this.state.bananas}</p>
        }
      </div>
    )
  }
}

export default App;
```

## Server.js

```js
'use strict'

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/bananas', (request, response) => response.send('bananas are great'));

app.listen(3001);
```
