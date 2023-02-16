# Warm Up Solution

## app.js

```javascript
import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      counter: 0
    }
  }

  addCount = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return(
      <button onClick={this.addCount}>Click Me</button>
      <p>{this.state.counter}</p>
      <Header title="the best counter app in the world!" />
    )
  }
}

export default App;
```

## header.js

```javascript
class Header extends React.Component {
  render(){
    return <h1>{this.props.title}</h1>
  }
}

export default Header;
```
