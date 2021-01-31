import React from 'react';
import {
    Box,
    Button,
    Grid,
    Heading,
    Text
} from 'theme-ui';

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
            <Grid>
                <Heading
                    as='h1'
                    bg='gray'
                    color='primary'>
                    Active Break
                </Heading>
                <Box component="App">

                    <Heading as='h2'
                    >
                        {workouts[this.state.index]}
                    </Heading>
                    <Button mt={4} variant="primary" onClick={this.handleClick}>Next</Button>
                </Box >
            </Grid>

        );
    }
}

export default Workout;