import React from 'react';

class Pokemon extends React.Component {
  // component Props: Values that are passed from parent to child component;
  constructor(props) {
    super(props);
    console.log(props);
  }

  getUpperName = () => {
    return this.props.name.toUpperCase();
  }

  // React Components have methods for rendering, because we are extending a React.Component we get to tell React what HTML we want to output in the browser.
  render() {
    return (
      <div>
        <h2>Pokemon Name: {this.getUpperName()}</h2>
        <p>Pokemon Type: {this.props.type}</p>
      </div>
    )
  }
}

export default Pokemon;
