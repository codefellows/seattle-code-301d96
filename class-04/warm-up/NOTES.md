# Overview of the warm-up challenge

Problems with this code:

- missing `import React from 'react'`
- constructor missing `(props)`
- `super(props)` missing semicolon
- `counter=0` should be `counter:0`
- `this.setState({ counter: couter++})` should be `this.setState({ counter: this.state.counter + 1 })`
- button 'click' should be 'onClick'
- `{addCount}` should be `{this.addCount}`
- `this.state.counter` should be in `{}`
- `<Header>` is missing a closing tag
- `<p>` is missing a closing tag
- `export App;` should be `export default App;`
- header.js needs `import React from 'react'`
- `{title}` should be `{this.props.title}`
- should be `export default Header`
- in the App.js, missing parent element around JSX
