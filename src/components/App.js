import '../App.css';
import React from 'react';
import Workout from '../components/Workout';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <Workout />
      </div >
    );
  }
}

export default App;
