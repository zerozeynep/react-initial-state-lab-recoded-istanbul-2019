// your Bomb code here!
import React, { Component } from 'react'
import  initialCount from  'index'

class Bomb extends Component {
  constructor(props) {
    super(props)

    this.state = {
      secondsLeft : props.initialCount
         
    }
  }

  render() {
    if(secondsLeft===0){
      return <div> Boom!  </div>
      
    }else {
      return (
        <div>
         {this.state.secondsLeft} seconds left before I go boom!
        </div>
      )
    }
    
  }
}

export default Bomb

