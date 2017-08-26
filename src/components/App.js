import React, { Component } from 'react';
import BoardContainer from '../containers/BoardContainer';
import SpareSquareContainer from '../containers/SpareSquareContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BoardContainer/>
        <SpareSquareContainer/>
      </div>
    );
  }
}

export default App;
