import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from './Grid'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Example 1</h1>
        <Grid cols={[2, 2, 4, 6]} rows={["30px", "50px", "70px", "100px"]}>
            <div>One</div>
            <div>Two
              <p>I have some more content in.</p>

              <p>This makes me taller than 100 pixels.</p>
            </div>
            <div>Three</div>
            <div>Four</div>
            <div>Five</div>
            <div>Six</div>
            <div>Seven</div>
            <div>Eight</div>
            <div>Nine</div>
            <div>Ten</div>
        </Grid>
      </div>
    );
  }
}

export default App;
