import React, { Component } from 'react';
import Navbar from './Navbar/Navbar'
import Jumbotron from './Jumbotron/Jumbotron'
import Clicky from './Clicky/Clicky'
import './App.css';
import _ from './clicky.json'

class App extends Component {
  state = {
    _, //include array of guitars
    newScore: 0, //highScore for display purposes
    currentScore: 0, //incrementing changing score during click\
    clicked: [], //an array to add to clicked

  }
  shuffle = (_) => {
    _.sort(function (a, b) { return 0.5 - Math.random() });
    return _;
  }

  //handleClick for truth/false comparsion
  //check if component is true or false this.state."handlclick" <<whatever function call truth
  handleIncrement = () =>{
    const score = this.state.currentScore+1;
    this.setState({
      currentScore: score
    })
    if(this.state.currentScore > this.state.newScore){
      const newHighScore = this.state.currentScore+1;
      this.setState({newScore: newHighScore})
    }
   
  }

  handleClick = (id) => {
    console.log("clicked")
    console.log("id is " + id);
    //id is passing and click is logging, we can change state here and reposition
    if (this.state.clicked.indexOf(id) === -1) { //check array of already clicked clickys and IF NOT THERE
      this.handleIncrement();                 //some other function to handle points
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      alert("oh no!");
      this.resetGame();
    }
  };




//resetgame if 
resetGame = () => {
  this.setState({
    _, //include array of guitars
    currentScore: 0,
    clicked: []
  })
  this.shuffle(this.state._);
}

//and handle increment for scores
render() {
  return (
    <div className='container'>
      <Navbar
        currentScore={this.state.currentScore}
        highScore={this.state.newScore}
      />
      <Jumbotron />


      {this.shuffle(this.state._).map(image => (
        <Clicky image={image.image}
          id={image.id}

          click={this.handleClick}

        />
      ))}

    </div>

  );
}
}

export default App;
