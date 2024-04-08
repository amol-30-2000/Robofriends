import React, { Component } from "react";
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';



class  App extends Component  {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield : ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots : users}));
    }

    onsearchChange = (event) =>{
        this.setState({ searchfield : event.target.value })
 
    }
   render(){
    const {searchfield , robots } = this.state

        const filteredRobots = robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if(!robots.length){
            return <h1>Loading</h1>
        }
        else{

            return(
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    
                    < SearchBox searchChange={this.onsearchChange}/>
                    <Scroll>
                    <CardList robots = {filteredRobots}/>
                    </Scroll>
                  
                </div>
                
            );

        }
  
   }
}

export default App;