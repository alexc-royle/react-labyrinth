import React, { Component } from 'react';
import PlayerSelectionFormContainer from '../containers/PlayerSelectionFormContainer';
import GameContainer from '../containers/GameContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<PlayerSelectionFormContainer/>
      	<GameContainer/>
      </div>
    );
  }
}

export default App;
