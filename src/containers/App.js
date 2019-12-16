import React, { Component } from 'react';
import CardList from '../components/CardList'; // Profile robots
import SearchBox from '../components/SearchBox'; // Searching robots
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super();
        // Giving access to robots arrays
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users => {
            this.setState( { robots: users } );
        })
    }

    onSearch = (event) => {
        // Search robots(not filtering)
        this.setState({ searchfield: event.target.value })
    }

    render() {
        // Destructuring
        const { robots, searchfield } = this.state;

        const filteredRobots = robots.filter(robot => {
            // Filtering robots from onSearch handling event
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
        });

        return !robots.length ? 
        <h1 className='f1 tc'>Loading</h1> : 
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox search={this.onSearch} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        )
    }
}

export default App;