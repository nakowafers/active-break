import React from 'react';

const workouts = [
    'Push Ups',
    'Sit Ups',
    'High Knees',
    'Butt Kickers',
    'Mountain Climbers',
    'Quick Feet',
    'Burpees',
    'V-Ups'];

class Workout extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            index: Math.round((Math.random() * (workouts.length - 1))),
        };
    }

    handleClick() {
        this.setState({
            index: Math.round((Math.random() * (workouts.length - 1)))
        });
    }

    render() {
        return (
            <div className="card">
                <h2>Active Break</h2>
                <p className="exercise">
                    {workouts[this.state.index]}
                </p>
                <button onClick={this.handleClick}>Next</button>
            </div >


        );
    }
}

export default Workout;