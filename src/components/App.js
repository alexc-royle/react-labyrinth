import React, { Component } from 'react';
import Square from './Square';
import BoardContainer from '../containers/BoardContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BoardContainer/>
      </div>
    );
  }
}

export default App;
