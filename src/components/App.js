import React from 'react';
import Workout from '../components/Workout';


class App extends React.Component {
  render() {
    return (
      <div className="container" >
        <Workout />
        <Workout />
      </div >
    );
  }
}

export default App;
