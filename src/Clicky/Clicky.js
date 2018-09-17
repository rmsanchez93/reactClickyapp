import React, { Component } from 'react'

import './Clicky.css'

class Clicky extends Component {
    constructor(props) {
        super(props);
        this.state = { isClicked: false };

    }

    clickHandler = () => {
        if (this.state.isClicked === false) {

            this.setState({ isClicked: true })
            console.log("counter is " + this.state.isClicked)

        }
        else { //if button was already clicked I want the app is alert user and reset current score and keep high score

            console.log("counter is " + this.state.isClicked)
        }

    }
    render() {
        return (
            <div onClick={this.clickHandler} className='clicky'>
                <img className='clickyimg' src={this.props.image} alt='img should be here' />
            </div>
        )
    }

}

export default Clicky