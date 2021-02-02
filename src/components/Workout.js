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
            <div>
                <h1
                    as='h1'
                    bg='gray'
                    color='primary'>
                    Active Break
                </h1>
                <div component="App">

                    <h2 as='h2'
                    >
                        {workouts[this.state.index]}
                    </h2>
                    <button mt={4} variant="primary" onClick={this.handleClick}>Next</button>
                </div >
            </div>

        );
    }
}

export default Workout;