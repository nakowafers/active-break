import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Clock from '../components/Clock'


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
            <Box component="App">
                <h1>Active Break</h1>
                <Clock />
                <h2>{workouts[this.state.index]}</h2>
                <Button variant="contained" color="primary" onClick={this.handleClick}>Next</Button>
            </Box>
        );
    }
}

export default Workout;