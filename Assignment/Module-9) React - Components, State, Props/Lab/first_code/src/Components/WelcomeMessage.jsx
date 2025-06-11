/* Task 2: 
o Create a class component WelcomeMessage that displays "Welcome to React!" and 
a render() method.  */
import React, { Component } from 'react'

 class WelcomeMessage extends Component {
  render() {
    return (
      <div>
            <h1>Welcome to React!</h1>
      </div>
    )
  }
}

export default WelcomeMessage
