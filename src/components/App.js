import React, { Component } from 'react';
import Square from './Square';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Square id='1' type='tjunction' orientation={{top: false, right: true, bottom: true, left: true}}/>
      </div>
    );
  }
}

export default App;
