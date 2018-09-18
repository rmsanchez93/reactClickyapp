import React, { Component } from 'react';
import Navbar from './Navbar/Navbar'
import Jumbotron from './Jumbotron/Jumbotron'
import Clicky from './Clicky/Clicky'
import './App.css';
import _ from './clicky.json'

class App extends Component {
  state ={
    _, //include array of guitars
    newScore : 0, //highScore for display purposes
    currentScore : 0, //incrementing changing score during click
    
  }
      shuffle = (_)=>{
       _.sort(function (a, b) { return 0.5 - Math.random() });
       return _;
     }

  //handleClick for truth/false comparsion
  //check if component is true or false this.state."handlclick" <<whatever function call truth
   handleScore = () =>{
    if(!this.state){
      const newScore =this.state.newScore+1;

      this.setState({newScore: newScore})
      this.setState({currentScore: newScore})
    }
    else{
      alert('oh snap you failed!')

    }
  }

  //resetgame if 
  resetGame = () =>{
    this.setState({
      _, //include array of guitars
      newScore : 0, //highScore for display purposes
      currentScore : 0,
    })
    this.shuffle(this.state._);
  }

  //and handle increment for scores
  render() {
    return (
      <div className = 'container'>
      <Navbar 
      currentScore={this.state.currentScore}
        highScore={this.state.newScore}
      />
      <Jumbotron/>
      
        
      {this.shuffle(this.state._).map(image =>(
        <Clicky image= {image.image} />
      ))}
     
      </div>
       
    );
  }
}

export default App;
